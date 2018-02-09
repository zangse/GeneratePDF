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

