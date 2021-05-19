// let str = "Talk is cheap , Show me the code."
// let str1 = "hello "
// let str2 = "world!"
// console.log(str1.concat(str2)) //hello world!

// //字符串的查找
// console.log(str.indexOf("c")) //8 返回字符串中字符首次出现的位置的下标
// console.log(str.indexOf("y")) //-1 字符串如果没有该字符就返回-1
// console.log(str.lastIndexOf("c")) //28    返回字符串中该字符最后一次出现的位置
// //match的使用
// console.log(str.match(/[A-Z]/)) // [ 'T', 'S' ]    默认返回第一个匹配的对象
// console.log(str.match(/[A-Z]/g)) // [ 'T', 'S' ]    默认返回第一个匹配的对象
// console.log(typeof str.match(/[A-Z]/g)) //object    返回一个对象数组
// let match1 = str.match("is")
// console.log(match1)
// /*
// [
//   'is',
//   index: 5,
//   input: 'Talk is cheap , Show me the code.',
//   groups: undefined
// ]
// */
// //  split的使用
// let split1 = str.split(/[' ']/)
// console.log(split1) //split自动全局匹配
// //   [("Talk", "is", "cheap", ",", "Show", "me", "the", "code.")]
// console.log(typeof split1) //object    返回一个对象
// //  search的使用
// let search1 = str.search(/['is']/)
// console.log(search1) //5
// console.log(typeof search1) //number    返回的是指定字符（字符串）出现的位置的下标
// //replace的使用
// let replace1 = str.replace(/['e']/g, "E") //将字符串中的所有'e'全部替换（需要手动全局匹配）为'E'
// console.log(replace1) //  Talk is chEap , Show mE thE codE.
// console.log(typeof replace1) //String    返回一个字符串

// console.log(match1)
// console.log(typeof match1) //object
// console.log(typeof match1[0]) //string    'is'
// console.log(match1[0].length) //  2
// console.log(match1[0]) //  2
// console.log(match1.index) //5

// let dog = {
//   tail: 1,
//   leg: 4,
// }
// console.log(Object.keys(dog)) //[ 'tail', 'leg' ] 这里的dog就是一个对象
// console.log(typeof Object.keys(dog)) //object    数组也是对象
// console.log(Object.keys(dog).length) //2
// console.log(dog instanceof Array) //false
// console.log(dog instanceof Object) //true
// console.log(Object.keys(dog) instanceof Object) //true    ,证明这里实际返回的是一个数组对象

// /*
// console.log(str.length) //33
// console.log(str.charAt(3))  //k
// console.log(str.charCodeAt(1))  //97

// //JavaScript中substring()、substr()、slice()的区别
// console.log(str.substring(2, 10))    //lk is ch 下标为2开始~10（不包括10）的元素
// console.log(str.substr(2, 10))    //lk is chea  下标为2开始的10个元素
// console.log(str.substr(-5, 2))    //co  下标可以为负数，表示倒数第几个元素
// console.log(str.slice(2,10))    //lk is ch  有substring的功能，不同的是下标可以为负数
// console.log(str.slice(10,-4))    //eap , Show me the c
// console.log(str.slice(-5,-3))    //co
// */

// // let a = [];
// // let b = {};
// // console.log('判断数组类型')
// // console.log(Array.isArray(a))   //true
// // console.log(Array.isArray(b))   //false

// var a = [1, , 1]
// console.log(a.length) // 3

// var a = [1, 2, 3]
// console.log(a.length) // 3
// console.log(a) // [1, 2, 3]

// var a = [, , ,]
// console.log(a[1]) //undefined

// var a = [1, 2, 3]
// delete a[1]
// console.log(a[1]) // undefined
// console.log(a.length) // 3

// var a = new Array(5) //创建5个数组空位
// Array.from(a) //将数组空位转换为undefined
// console.log(a[1]) //undefined
// console.log(a[2]) //undefined

let str = 'Hello , World!'
console.log(str.split(''))  //将字符串转换为数组
console.log(str.split(/[a-z]/ig).join('*')) //查询所有字母，并将他们替换为'*'
console.log(str)  //字符串是只读的
console.log(Array.from(str))  //将字符串转换为数组
