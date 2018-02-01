const Router = require('koa-router');
const generatePdf = require('../middleware/generatePdf.middleware.js');
const router = new Router();
const hello = (ctx, next) => {
    ctx.response.body = 'Hello Koa';
}
router.get('hello', hello);
router.get('pdf', generatePdf.generate);
module.exports = router;