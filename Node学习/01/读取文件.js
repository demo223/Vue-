// //1.使用Node.js读取文件
// //第一个参数是文件的路径，第二个参数是回调函数
// let fs = require("fs")
// fs.readFile("./hello.js", (err, data) => {
//   if (err) {
//     console.error(err)
//   } else {
//     //   console.log(data) //这里的data为二进制转十六进制
//     console.log(data.toString()) //返回文件里面的内容
//   }
// })

//2.使用Node.js写文件
//第一个参数：要写入的文件的名称
// 第二个参数：文件内容
// 第三个参数：回调函数
let fs = require("fs")
fs.writeFile("./你好.js",'这是我要写入的文件内容', (err) => {
  if (err) {
    console.log("文件写入失败!")
  } else {
    console.log("文件写入成功!")
  }
})
