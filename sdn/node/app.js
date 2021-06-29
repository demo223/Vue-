// 引入express
var express = require('express');
let loginRouter = require('./login');

// 1. 创建app
var app = express();

// 登录路由
app.use('./login.js',loginRouter)

app.listen(3000,function(){
    console.log('服务端正在3000运行.......');
})