//引入express框架
const express = require('express')
//创建应用对象
const app = express()
const port = 3000
//创建路由规则
// app.get('/server', (req, res) => {
//   //设置响应头  设置允许跨域
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   //设置响应体
//   res.send('Hello World!')
// })
// //设置post请求
// app.post('/server', (req, res) => {
//   //设置响应头  设置允许跨域
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   //设置响应头 设置可以自定义响应头
//   res.setHeader('Access-Control-Allow-Headers', '*')
//   //设置响应体
//   res.send('Hello AJAX-POST！')
// })
//使用all 可以接受任意类型的请求
app.all('/server', (req, res) => {
  //设置响应头  设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*")
  //设置响应头 设置可以自定义响应头
  res.setHeader('Access-Control-Allow-Headers', '*')
  //设置响应体
  //这里传入了一个对象
  const people = {
    name: 'zhouqi',
    age: 22,
    gender: 'male'
  }
  //将对象进行字符串转化
  let str = JSON.stringify(people)
  res.send(str)
})

app.all('/ie', (req, res) => {
  //设置响应头  设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*")
  //设置响应头 设置可以自定义响应头
  res.setHeader('Access-Control-Allow-Headers', '*')
  //设置响应体
  
  res.send('Hello,world!-2')
})

app.all('/delay', (req, res) => {
  //设置响应头  设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*")
  //设置响应头 设置可以自定义响应头
  res.setHeader('Access-Control-Allow-Headers', '*')
  //设置响应体
  //设置一个延时
  setTimeout(() => {
    res.send('hello,world!')
  }, 3000);
})

//监听端口启动服务
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
