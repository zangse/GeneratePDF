const Koa = require('koa')
const app = new Koa();
const router = require('koa-router')();
const index=require('./app/routers/index');

router.use('/', index.routes(), index.allowedMethods());
app.use(router.routes(), router.allowedMethods());

app.listen(3000);