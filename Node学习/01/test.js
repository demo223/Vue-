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

/*
//构建http服务器
let http = require('http')
let server = http.createServer()
server.on('request', (req, res) => {
    console.log('当前路径为：' + req.url)
    res.write('End of response!')
    //一定要关闭write()
    res.end()
})
//绑定端口号
server.listen(3000, () => {
    console.log('success!')
})
*/