"use strict";

//三方模块
var express = require("express")();

var http_proxy = require("http-proxy");

var body_parser = require("body-parser"); //端口


var port = 8090; //密码

var password = "pass"; //调试开关

var debug = true; //代理

var proxy = http_proxy.createProxyServer({}); //存放目标

var pool = []; //监听

express.listen(port);
console.log("blance server at port:", port);
proxy.on("error", function (err, req, res) {
  try {
    res.end("error");
  } catch (e) {
    console.log(e.message);
  }
}); //body-parser

express.use(body_parser.urlencoded({
  extended: true
})); //注册

express.post("/register_blance", function (req, res, next) {
  //密码，用于校验
  if (req.body.password == password) {
    //添加到负载均衡池
    pool.push(req.body.target);
    console.log("add blance:", req.body.target);
    res.end("blance added!");
  } else {
    console.log("register blance error: password error!");
    console.log("error!");
  }

  return;
}); //反注册

express.post("/unregister_blance", function (req, res, next) {
  //密码，用于校验
  if (req.body.password == password) {
    //遍历
    for (i = 0; i < pool.length; i++) {
      //匹配
      if (pool[i] == req.body.target) {
        //删除
        delete pool[i];
        pool.splice(i, 1);
        console.log("remove blance:", req.body.target);
        res.end("blance removed!");
      }
    }
  } else {
    console.log("unregister blance error: password error!");
    res.end("error!");
  }

  return;
}); //随机访问负载

express.use(function (req, res, next) {
  if (pool.length == 0) {
    console.log("error: blance pool is null.");
    return;
  } //随机数


  var rnd = random_number(0, pool.length - 1); //访问

  proxy.web(req, res, {
    target: pool[rnd],
    selfHandleResponse: false,
    changeOrigin: false
  });
  console.log("blance visit: ", rnd, pool[rnd], ",url:", req.url); //next();
}); //范围内随机数

function random_number(min, max) {
  var range = max - min;
  var rand = Math.random();
  var num = min + Math.round(rand * range);
  return num;
}