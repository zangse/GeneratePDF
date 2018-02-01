const fs = require('fs');
const pdfMake = require('pdfmake')
const doc = require('../models/doc.model.js');
const fonts = {
    msyh: {
        normal: './app/fonts/msyh.ttf',
        bold: './app/fonts/msyh.ttf'
    }
};

exports.generate = async function(ctx, next) {
    let data = await createPdf(next);
    ctx.response.type = 'html'
    ctx.response.body = `<iframe width="100%" height="100%"  id="preview" type="application/pdf" src=${data}></iframe>`
};

async function createPdf(next) {
    let now = new Date();
    let printer = new pdfMake(fonts)
    let contractDoc = doc.createDoc();
    let pdfDoc = printer.createPdfKitDocument(contractDoc);
    let random = Math.floor(Math.random() * 1000);
    const filename = new Date().getTime() + '_' + random + ".pdf";
    let chunks = [];
    let result;
    return new Promise(function(resolve, reject) {
        pdfDoc.on('data', function(chunk) {
            chunks.push(chunk);
        });
        pdfDoc.on('end', function() {
            result = Buffer.concat(chunks);
            let pdfData = 'data:application/pdf;base64,' + result.toString('base64');
            resolve(pdfData);
        });
        pdfDoc.end();
    })
}