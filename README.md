##GeneratePDF
pdfmake nodejs服务端的实现
### 使用

```
git clone https://github.com/zangse/GeneratePDF

npm install 

npm run start

在浏览器打开

http://localhost:3000/pdf

```
```
//项目结构
├── README.md
├── app
│   ├── fonts
│   │   └── msyh.ttf  //字体文件
│   ├── images
│   │   ├── qrcode.png //用到的图片
│   │   └── snh.jpg  
│   ├── middleware
│   │   └── generatePdf.middleware.js //生成文档js
│   ├── models
│   │   └── doc.model.js //文档原型
│   └── routers
│       └── index.js //路由文件
├── app.js  
├── package.json
└── tempFiles  //缓存目录
```


效果图
![image](https://github.com/zangse/GeneratePDF/images/1522152502574.jpg)

pdfmake可以做的还有很多,例如添加水印、设置页眉页脚等等，详情可以查看项目文档
[pdfmake](https://github.com/bpampuch/pdfmake)


