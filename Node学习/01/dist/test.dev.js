"use strict";

/*
//文件写入
let fs = require("fs")
fs.writeFile("httpTest.js", "内容", (err, data) => {
    if (err) {
        console.log('写入失败！')
    } else {
        console.log('写入成功！')
    }
})
*/

/*
//文件读取
let fs = require("fs")
fs.readFile("./你好.js", (err, data) => {
    if (err) {
        console.log('文件读取失败！')
    } else {
        console.log('文件读取成功！')
        console.log(data.toString())
    }
})
*/
//读取文件
var fs = require('fs'); //构建http服务器


var http = require("http");

var server = http.createServer();
server.on("request", function (req, res) {
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  console.log("当前路径为：" + req.url);

  if (req.url === '/') {
    fs.readFile();
  } else if (req.url === '/hello') {
    res.write("这里是hello页面！\n");
  } else if (req.url === '/hello/home') {
    res.write('这里是hello里面的home界面！\n');
  } else {
    res.write('404 not found!\n');
  } //一定要关闭write()


  res.end("End of response!");
}); //绑定端口号

server.listen(3000, function () {
  console.log("success!");
});