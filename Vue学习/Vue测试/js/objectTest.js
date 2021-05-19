// let a = null
// console.log(typeof a)    //object
// let b = Object.create(null)
// console.log(a)
// console.log(b)

// //继承的使用
// let o = {}
// o.x = 1
// let p = Object.create(o) //这里p继承了o的属性
// p.y = 2
// p.x = 10
// let q = Object.create(p) //这里q继承了p的属性
// q.z = 3
// let f = q.toString()
// console.log(f)
// console.log(q.x + q.y + q.z) //6 1+2+3
// console.log(o)
// console.log(p)
// console.log(q)
// console.log(o.x) //1    原型不受影响
// console.log("z" in q) //true  q自己的z属性
// console.log("x" in q) //true  q继承了o的x属性
// console.log("toString" in q) //q继承了toString属性
// console.log(q.hasOwnProperty("z")) //true z是自己本身的属性
// console.log(q.hasOwnProperty('x'))  //false,业务x属性是继承的，不是他自己的
// console.log(Object.prototype.propertyIsEnumerable('toString'))  //false,因为toString不可枚举

// //对象的属性复制
// let cat = {
//   foot: 4,
//   tail: 1,
// }
// let chicken = {
//   foot: 2,
//   tail: 1,
//   wing: 1,
// }
// let animal = Object.assign({}, cat, chicken)
// //后面的属性会覆盖前面的属性
// console.log(animal) //{ foot: 2, tail: 1, wing: 1 }

// let me = {
//   name: "zq",
//   age: 22,
//   gender: "male",
// }
// let s = JSON.stringify(me)
// let p = JSON.parse(s)
// console.log(s)  //{"name":"zq","age":22,"gender":"male"}
// console.log(p)  //{ name: 'zq', age: 22, gender: 'male' }

// console.log(me.toString())  //[object Object]
// console.log(me.valueOf())   //{ name: 'zq', age: 22, gender: 'male' }

// //对象的简写属性
// let a = 1,
//   b = 2,
//   c = 3
// let obj = { a, b, c }
// console.log(obj.a + obj.b + obj.c) //6

// //扩展操作符
// let obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// }
// let obj2 = {
//   a: 6,
//   d: 4,
// }
// let obj = { ...obj1, ...obj2 }
// console.log(obj.a) //6
// console.log(obj) //{ a: 6, b: 2, c: 3, d: 4 }

//访问器属性
let obj = {
  x: 3.0,
  y: 4.0,
  get r() {
    return Math.hypot(this.x, this.y) //Math.hypot() 函数返回所有参数的平方和的平方根
  },
  set r(n) {
    n++
  }
}
console.log(obj.r)  //5
