// //函数声明和调用
// let square = function (n) {
//   return n * n
// } //将函数赋值给一个变量
// console.log(square(5)) //25

// //使用function()声明函数
// function print(n) {
//   console.log(n)
// }
// print('hello,world')  //'hello,world'

// //Function构造函数
// const add = new Function("x", "y", "return x + y")
// console.log(add(4, 5)) //9

// //递归
// let factorial = function f(n) {
//   if (n === 1) {
//     return 1
//   } else {
//     return n * f(n - 1)
//   }
// }
// console.log(factorial(5)) //120

// //立即调用函数
// console.log(
//   (function (a, b) {
//     return a + b
//   })(3, 4)
// ) //7

// //箭头函数
// const sum = (a, b) => a + b //只有一个return可以省略
// console.log(sum(1, 2)) //3
// //对于无参的箭头函数必须写上空原括号
// const f = () => 'ok!'
// console.log(f())  //ok!
// // 如果箭头函数只有一个参数，可以省略括号
// const s = n => n * n
// console.log(s(5)) //25

// //嵌套函数
// const s = (r) => Math.PI * r ** 2 //底面积
// const v = (h, s) => s * h //体积
// console.log(s(2)) //12.566370614359172
// console.log(v(5, s(2))) //62.83185307179586

// 函数的可选形参与默认值
// 当传入实参的个数少于声明的实参的个数，额外的形参通常会默认为undefined
// function add(a, b, c) {
//   return a + b + c
// }
// console.log(add(1)) //NaN
// console.log(1 + undefined) //NaN
// console.log(add(1, 2, 3)) //6
// console.log(add(1, 2, 3, 4)) //6
// //直接给每个形参定义默认值
// const m = function (a = 1, b = 1, c = 1) {
//   return a * b * c
// }
// console.log(m(4, 9)) //36,这样就不会得到NAN了
// console.log(m(3, 4, 5)) //60
// //使用前面的参数来定义后面的参数
// const f = (a, b = 2 * a) => ({ a, b }) //返回一个对象，含有属性a和属性b
// console.log(f(1)) //{ a: 1, b: 2 }
// console.log(f(1, 5)) //{ a: 1, b: 5 }

// //剩余形参,最后一个形参前面加...符号，剩余形参的值始终是数组
// //接收一个或多个实参，返回其中最大的一个
// const max = function (a = -Infinity, ...rest) {
//   //...rest为剩余形参
//   let maxValue = a
//   for (const i of rest) {
//     if (i > maxValue) {
//       maxValue = i
//     }
//   }
//   console.log(Array.isArray(rest))  //true，剩余形参为数组
//   return maxValue //返回最大值
// }
// console.log(max(24, 3, 5, 48, 55, 92, 20)) //92

// //在函数调用中使用扩展操作符
// let numbers = [23,12,43,68,29,15]
// console.log(Math.max(...numbers))  //68
// console.log(Math.min(...numbers)) //12

// //扩展操作符...的使用
// let arr1 = [1, 2, 3, 4]
// let arr2 = [...arr1]
// console.log(arr2) //[ 1, 2, 3, 4 ]

// let arr3 = [
//   { a: 1, b: 2 },
// ] //声明一个对象数组
// let arr4 = [...arr3]
// console.log(arr3) //[ { a: 1, b: 2 }]
// arr3[0].a = 10
// console.log(arr3) //[ { a: 10, b: 2 } ]
// console.log(arr4) //[ { a: 10, b: 2 } ]
// //由于上面arr4和arr3的内存空间的地址是一样的，
// //所以改变arr3中对象的属性也会改变arr4中的对象的地址
// //这就是浅拷贝

// //合并数组
// //以前可以使用concat()方法合并两个数组，现在使用扩展操作符
// let arr1 = [1,2,3]
// let arr2 = [4, 5]
// let arr3 = [...arr1,...arr2]
// console.log(arr3) //[ 1, 2, 3, 4, 5 ]
// //合并多个数组,可以自己控制复制的顺序
// let a = [2,4,6]
// let b = [1,3,5]
// let c = [3, 6, 9]
// let d = [...b,...a,...c]
// console.log(d)  //[(1, 3, 5, 2, 4, 6, 3, 6, 9)]

// //向数组中添加元素
// let arr = ['I', "am", 'a', "student"]
// arr = [...arr, 'zhouqi']
// console.log(arr)  //[ 'I', 'am', 'a', 'student', 'zhouqi' ]

// //向对象中添加属性
// let obj = {
//   name: 'zq',
//   age:22
// }
// obj = {...obj,gender:'male'}
// console.log(obj)  //{ name: 'zq', age: 22, gender: 'male' }

// //向函数传递无限参数
// let a = function (...args) {
//   console.log(args)
// }
// console.log('周岐',22,'男') //周岐 22 男

// //将字符串转化为数组
// let str = 'hello'
// let arr = [...str]
// console.log(arr)  //[ 'h', 'e', 'l', 'l', 'o' ]
// console.log(...arr)

// //函数的属性和方法
// // length()属性，返回函数中形参的个数,不包括剩余形参
// let add = function (a, b,...rest) {
//   return a + b
// }
// console.log(add.length) //2
// //name()属性，只读，返回函数名称
// let f = function add(a, b) {
//   return a + b
// }
// console.log(f.name) //add
// // toString()方法
// console.log(f.toString()) //返回函数的源代码
/*
  function add(a,b){
    return a+b
  }
*/

// 浏览器有两个隐藏的参数，一个是this，另一个是arguments
// //arguments()对象
// let f = function (a, b, c) {
//   console.log(arguments[0])
//   console.log(arguments[1])
//   console.log(arguments[2])
//   console.log(arguments)
// }
// f(1,2,3)
// // 1
// // 2
// // 3
// // [Arguments] { '0': 1, '1': 2, '2': 3 }

// //call()和apply()的使用
// //call()和apply()的第一个参数都是调用这个函数的对象
// let obj1 = { name: "obj1" }
// let obj2 = { name: "obj2" }
// function fun() {
//   console.log(this.name)
// }
// function add(a, b) {
//   console.log(a+b)
// }
// let obj = {
//   name: "周岐",
//   a: 1,
//   b: 2,
//   c: 3,
// }

// fun.call(obj) //周岐
// fun.apply(obj) //周岐
// add.call(obj, obj.a, obj.b) //3
// //apply()方法与call()方法类似，只不过传入的第二个参数需要以数组的形式提供
// add.apply(obj, [obj.b, obj.c])  //5
// add.apply(obj, [2, 6])  //8

// // bind()的使用
// // bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。
// let obj = {
//   name: 'zq',
//   age:22
// }
// let t = new Date()
// t.getTime()
// // let d = t.getTime
// // console.log(d())  //this is not a Date object.
// // 因为getTime方法内部的this，绑定Date对象的实例，
// // 赋给变量print以后，内部的this已经不指向Date对象的实例了。
// //
// //使用bind()可以解决上述问题

// //使用函数处理数组
// const sum = (x, y) => x + y
// const square = (x, y) => x * y
// let arr = [1, 3, 5, 7, 9]
// console.log(arr.reduce(sum) / arr.length) //5,计算平均值
// console.log(arr.reduce(square)) //945

let a = -12.8
console.log(parseInt(a))