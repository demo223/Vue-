// // number类型   整数和小数
// let a = 1
// let b = 1.123
// let c = 1_000_000

// //字符串类型
// let str = "hello"

// console.log("\u{1F600}")
// console.log(c)
// console.log(a / 0) //Infinity
// console.log(-a / 0) //-Infinity
// console.log(0 / 0) //NaN
// console.log(Infinity / Infinity) //NaN
// console.log(Math.sqrt(-1)) //NaN
// console.log(Number.MAX_VALUE) //1.7976931348623157e+308
// console.log(Number.MIN_VALUE) //5e-324
// console.log(NaN === NaN) //false
// console.log(0 === -0) //true

// let d = 0.2
// let e = 0.1
// let f = d - e
// console.log(f) //0.1
// console.log(f == 0.1) //true

// let m = 0.3
// let n = 0.2
// let x = m - n
// console.log(m - n) //0.09999999999999998

// Data类
// let time = Date.now()
// console.log(time)
// let now = new Date()
// console.log(now)
// console.log(now.getTime())
// console.log(now.toDateString())

// //符号类型  (ES6新增加的类型)
// let symname = Symbol("propname")
// console.log(typeof (symname))    //symbol
// let obj = {}
// console.log(typeof (obj))    //object
// obj.symname = 'hello'   //可以使用符号作为对象的属性名，ES6之前只有字符串可以作为属性名
// let age = 22
// obj.age = 18
// obj['name'] = "zhouqi"  //如果键名是数值，会被自动转为字符串。
// obj['address'] = "hb"   // 使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理
// console.log(obj)

// let obj1 = {}
// let obj2 = obj1
// obj2.prop = '2'
// console.log(obj1.prop)  //2
// obj1.name = 'obj1'
// console.log(obj2.name)  //obj1
// console.log(obj1 === obj2)  //true 证明obj1和obj2的内存地址是一样的

//读取属性
// let obj = {
//     a:'zhouqi'
// }
// console.log(obj.a)  //zhouqi
// console.log(obj['a'])   //zhouqi

// //属性赋值
// let obj = {}
// obj.name = "zq"
// obj["age"] = 22
// console.log(obj) //{ name: 'zq', age: 22 }
// console.log(Object.keys(obj))   //[ 'name', 'age' ]

// //删除属性
// let obj = {
//     name: 'zq',
//     age: 22,
//     gender:'male'
// }
// delete obj.gender  //true
// console.log(obj)    //{ name: 'zq', age: 22 }

// //判断对象中的属性是否存在
// let obj = {
//   a: 123,
// }
// console.log('a' in obj) //true 注意属性名要加引号
// // in运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。
// console.log('toString' in obj)  //true

// //for...in遍历对象
// let obj = {
//     name: 'zq',
//     age: 22,
//     gender:'male'
// }
// for (let i in obj) {
//     console.log(i)
// }
// // name
// // age
// // gender
// console.log(obj.toString)   //[Function: toString]

// // with的使用
// let obj = {
//   name: "zhangsan",
//   age: 16,
// }
// with (obj) {
//   name = "lisi" //注意这里不要加逗号，这里是一个赋值语句
//   age = 26
// }
// console.log(obj) //{ name: 'lisi', age: 26 }

// let num = 1.234
// re = num.toFixed(2)
// console.log(re) //1.23
// console.log(typeof re) //string

// //进制转换
// let a = 8
// let b = 0b1000
// console.log(a.toString(8))  //10  将8转换为八进制
// console.log(b.toString()) //8 默认转换为10进制
// let c = a.toString(2)
// console.log(c)  //1000
// console.log(typeof c) //string

// console.log(parseInt('111', 2)) //将二进制的111转换为十进制
// console.log(parseInt('C',16)) //将十六进制的C转换为十进制
/*
1、parseInt中第二个参数 radix 是介于2-36的数， 计算机中 0到9为十进制，
再往上十一进制开始用字母表示那么26个字母就可以再十进制上面加多26个进制，即三十六进制。
2、如果parseInt中的参数不是字符串，那么会先转成字符串再进行转换；
3、字符串转整数的时候是一个一个字符依次进行转换的，一旦遇到不能转为数字的字符，就不会再进行下去，直接返回已经转好的部分；
4、如果字符串的第一个字符不能转为数字时，则直接返回NaN;
*/

// let time = new Date()
// console.log(time)
// console.log(typeof time)  //object
// console.log(time.valueOf()) //返回当前时间戳

// const PI = 3.14 //常量名大写
// console.log(PI)

// let s = "hello"
// s = 123
// console.log(s)

// let [a, b] = [1, 2] //相当于let a = 1,b = 2
// console.log(a, b) //1 2
// ;[a, b] = [a + 1, b + 1] //相当于a = a + 1 , b = b + 1
// console.log(a, b) //2,3
// ;[a, b] = [b, a]
// //注意加分号，否则会报错
// console.log(a, b) //3,2
// console.log([a, b]) //[ 3, 2 ]

// let [x, ...y] = [1, 2, 3, 4] //x == 1 , y == [2,3,4]
// console.log(x, y) //1 [ 2, 3, 4 ]
// console.log(typeof x) //number
// console.log(typeof y) //object
// console.log(Array.isArray(y)) //true

// //解构的右侧可以是任何可迭代对象
// //字符串情况
// let [m, ...n] = "hello" //m == 'h , h = [ 'e', 'l', 'l', 'o' ]
// console.log(m, n) //h [ 'e', 'l', 'l', 'o' ]
// //对象情况
// let obj = { name: "zq", age: 22, gender: "male" }
// let { name, age, gender } = obj
// console.log(name, age, gender)  //zq 22 male

// //可以大量简化代码
// const { log } = console;
// log('hello') // hello
// const { floor, ceil, round } = Math
// log(floor(3.4)) //3
// log(ceil(3.4))  //4
// log(round(3.4)) //3

// let obj = {
//   a: null,
//   b: undefined,
//   c: 454,
//   "a b": 123, //特殊字符必须加引号
// }
// console.log(obj["a b"]) //123
// // console.log(obj.a.abc)  //读取null或undefined的属性会报错
// console.log(obj.a?.abc) //undefinded  使用?.或?.[]可以解决这个报错的问题

// console.log(Math.max(12, 23, 25, 93)) //93

// console.log(2 << 1) //4 左移1位
// console.log(4 >> 1) //2 右移1位
// console.log(5 / 2) //JavaScript中所有数都是浮点数
// console.log(null + 1) //1
// console.log(undefined + 1) //NaN

// let x = "1"
// // console.log(++x)  //2
// console.log(x + 1) //11
// console.log(~12) //-13
// console.log(~-15) //14 取反减1
// console.log(3 << 2) //12 3*2^2
// console.log(16 >> 2) //4
// console.log(13 >> 2) //3

// let nan = NaN
// console.log(isNaN(nan)) //true
// let nl = null
// let ndf = undefined
// console.log(nl == ndf) //true
// let str = "1"
// console.log(str == true)  //true
// console.log(str.valueOf())  //1
// console.log(str.toString()) //1
// console.log(str == 1) //true

// let arr = ["hello", "world", "love"] //数组的属性名就是索引值
// console.log(1 in arr) //true  下标为1的属性
// console.log(5 in arr) //没有下标为5的元素

// let stu = function (id, name, age) {
//   this.id = id
//   this.name = name
//   this.age = age
// }

// let stu1 = new stu()
// console.log(stu1) //stu { id: undefined, name: undefined, age: undefined }
// console.log(stu1 instanceof stu) //true
// console.log(stu1 instanceof Object) //true  所有对象都是Object的实例
// console.log(stu1 instanceof Array) //false

// let obj = {
//   name: "zq",
//   age: 22,
//   gender: "male",
// }
// console.log("name" in obj) //true
// console.log(1 in obj)
// console.log(obj && obj.name) //zq  当左侧的值为真值的时候，返回右侧的值
// let x = null //null,undefined,false,0,NaN为假值
// console.log(x && obj.name) //null  当左侧为假值的时候，返回左侧的值，不再求值右边的表达式
// let a = 12
// let b = 35
// console.log(a && b) //35
// console.log(!!a) //true  使用!!a可以返回a的布尔值
// console.log(Boolean(a)) //true  也可以转换为布尔值
// let c = "hello"
// console.log((a += c)) //12hello

// console.log(eval(3+6))

// let a = 2
// let b = 3
// if (a < b)  //简便写法，但是容易出错
//   console.log(a < b)
// else
//   console.log(a>=b)

// let n = 3
// switch (n) {
//   case 1:
//     console.log('n=1')
//     break;
//   case 2:
//     console.log('n=2')
//     break;
//   case 3:
//     console.log('n=3')
//     break;
//   default:
//     console.log(n!=1,2,3)
//     break;
// }

//使用switch根据值的类型，执行表达式
// let n = 'hello'
// let n = 16
// let n = {
//   name: 'zq',
//   age:22
// }
// switch (typeof n) {
//   case 'string':
//     console.log("'"+n+"'")  //给字符串加上引号
//     break;
//   case 'number':
//     console.log(n.toString(16)) //如果n是整数，就转换为16进制输出
//     break;
//   case 'object':
//     console.log(Object.keys(n)) //输出对象的所有属性名
//     break;

//   default:
//     console.log(typeof n)
//     break;
// }

//for (... of ...)的使用  用于可迭代对象（数组，字符串，集合，映射）
// let data = [1, 2, 3, 4, 5, 6]
// let sum = 0
// for (const i of data) {
//   sum += i
// }
// console.log(sum) //21
// //对象是不可迭代的
// //但可以通过基于Object.keys()的方法使用for/of
// let obj = {
//   name: "zq",
//   age: 22,
//   gender: "male",
// }
// let keys = [] //保存obj对象所有的属性名
// let values = [] //保存obj对象所有的属性值
// let entires = [] //保存obj对象的属性名和属性值
// for (const i of Object.keys(obj)) {
//   //这里Object.keys(obj)返回的是一个包括对象obj所有属性名的数组
//   keys.push(i)
// }
// for (const i of Object.values(obj)) {
//   values.push(i)
// }
// for (const [i, j] of Object.entries(obj)) {
//   let str = i + " : " + j
//   entires.push(str)
// }
// console.log(keys) //[ 'name', 'age', 'gender' ]
// console.log(values) //[ 'zq', 22, 'male' ]
// console.log(entires) //[ 'name : zq', 'age : 22', 'gender : male' ]
// console.log(Array.isArray(Object.entries(obj))) //true， Object.entries(obj)返回一个数组

// // for/of用于字符串
// let str = "hello"
// let arr = []
// for (const i of str) {
//   arr.push(i)
// }
// console.log(arr)  //[ 'h', 'e', 'l', 'l', 'o' ]

//for/of用于set和map
// let arr = [2,4,6,4,2,7,9,7,6]
// let setList = new Set(arr)
// console.log(setList)  //Set(5) { 2, 4, 6, 7, 9 }
// let s = []
// for (const i of setList) {
//   s.push(i)
// }
// console.log(s)  //[ 2, 4, 6, 7, 9 ]
// //用于map
// let mapList = new Map([
//   [1, "jake"],
//   [2, "lose"],
//   [3, "bob"],
// ])
// let arr = []
// for (const [i,j] of mapList) {
//   let str = i + ' : ' + j
//   arr.push(str)
// }
// console.log(arr)  //[ '1 : jake', '2 : lose', '3 : bob' ]

// try/catch/finally的使用
// 
// try {
//   let n = -5
//   if (n < 0) {
//     throw new Error("n must be > 0")
//   }
// } catch (error) {
//   console.log(error)
// }
// function a() {
//   "use strict"
//   try {
//     x = 12
//     console.log(x)
//   } catch (error) {
//     console.log(error) //ReferenceError: x is not defined
//   }
// }
// a() //调用函数a
// console.log("成功捕获了异常!!!")