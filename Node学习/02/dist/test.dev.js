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
var fs = require("fs"); //构建http服务器


var http = require("http");

var server = http.createServer();
server.on("request", function (req, res) {
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  console.log("当前路径为：" + req.url);

  if (req.url === "/") {
    fs.readFile("./博客.html", function (err, data) {
      if (err) {
        //这里的是输出文档
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败！");
      } else {
        //这里输出的是HTML代码，HTML文件
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(data);
      }
    });
  } else if (req.url === "/picture") {
    fs.readFile("./picture.jpg", function (err, data) {
      if (err) {
        //   文本文件.txt的Content-Type为text/plain
        res.setHeader("Content-Type", "text/plain;charset=utf-8");
        res.end("文件读取失败！");
      } else {
        //图片文件.jpg的Content-Type为image/jpeg,不要charset=utf-8
        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
      }
    });
  } else if (req.url === "/hello") {
    res.end("这里是hello页面！\n");
  } else if (req.url === "/about") {
    res.end("这里是about界面！\n");
  } else {
    res.end("404 not found!\n");
  } //一定要关闭write()

}); //绑定端口号

server.listen(3000, function () {
  console.log("success!");
});