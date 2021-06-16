const express = require('express')

//创建3000端口的服务
const app1 = express()
app1.all('/app1', (req, res) => {
  //解决跨域问题：方法1
  //设置响应头  设置允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.send('Hello app1!')
})
app1.listen(3000, () =>
  console.log(`Example app listening on port 3000!`)
)

//创建5000端口的服务
const app2 = express()
app2.get('/app2', (req, res) => {
  //解决跨域问题：方法2
  //使用jsonp
  let jsonp = req.query.callback
  res.send(jsonp)
  res.send('Hello app2!')
})
app2.listen(5000, () =>
  console.log(`Example app listening on port 5000!`)
)