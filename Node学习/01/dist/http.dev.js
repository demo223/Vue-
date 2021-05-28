"use strict";

//http服务
//1.加载http核心模块
var http = require("http"); //2.使用http.createServer()方法创建一个web服务器


var server = http.createServer(); //3.收到客户端的请求后，触发服务器的request请求事件
//request：请求对象 用来获取客户端的一些请求信息，例如请求路径
//response：响应对象 用来给客户端发送响应消息

server.on("request", function (request, response) {
  console.log("收到了客户端的请求,请求路径是" + request.url); //response对象有一个write方法可以用来给客户端发送响应数据
  //write可以用多次，但是最后一定要使用end来结束响应 ，否则客户端会一直等待

  /*
    response.write("Send response\n")
    response.write("End of response")   //这里中文会出现乱码
    response.end()  //这里一定要加这一句！！！
    */

  response.end("Send response\nEnd of response"); //一般不使用上面的写法
}); //4.绑定端口号，启动服务器

server.listen(3000, function () {
  console.log("服务器启动成功，通过访问'http://127.0.0.1:3000/'来进行访问");
});