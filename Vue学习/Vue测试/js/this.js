console.log("控制台输出如下：")
//JavaScript中this的使用
let obj1 = {
  name: "周岐",
  age: 22,
  gender: "male",
  getName: function () {
    return this.name
  },
}
console.log(obj1.getName()) //周岐
let obj2 = {
  name: "张三",
  age: 18,
  gender: "male",
}
obj2.getName = obj1.getName //将obj1的属性赋给obj2
console.log(obj2.getName()) //张三
// 只要函数被赋给另外一个变量，this的指向就会变
let name = "李四"
let f = obj1.getName //将obj1的属性（函数）赋值给变量f
console.log(f) //[Function: getName],此时f是一个函数
console.log(f())
console.log(typeof this) //object
