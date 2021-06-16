//引入express框架
const express = require('express')
//创建应用对象
const app = express()
const port = 3000

//使用all 可以接受任意类型的请求
app.all('/axios', (req, res) => {
  //设置响应头  设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*")
  //设置响应头 设置可以自定义响应头
  res.setHeader('Access-Control-Allow-Headers', '*')
  // 设置响应体
  // 这里传入了一个对象
  const people = {
    name: 'zhouqi',
    age: 22,
    gender: 'male'
  }
  //将对象进行字符串转化
  let str = JSON.stringify(people)
  setTimeout(() => {
    res.send(str)
  }, 3000);

  // res.send('hello jquery!')
})


//监听端口启动服务
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})