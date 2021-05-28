// let a = [1,2,3]
// let b = [0, ...a, 4]
// console.log(b)  //[ 0, 1, 2, 3, 4 ]

// //将字符串转化为字符数组
// //使用Array()构造函数
// let str = "hello"
// let arr1 = Array.from(str)
// console.log(arr1)
// //使用扩展操作符进行转换
// let arr2 = [...str]
// console.log(arr2) //[ 'h', 'e', 'l', 'l', 'o' ]

// //Array.of()的使用
// /*
//   使用构造函数Array()时，
//   在只有一个参数时，这个参数指定的是长度，这也就意味着
//   无法使用构造函数创建只包含一个数组元素的数组，
//   所以引入了Array.of()
// */
// let arr3 = new Array(5) //创建一个数组长度为5的数组
// console.log(arr3.length) //5
// let arr4 = new Array(1, 2, 3, 4, 5)
// console.log(arr4) //[ 1, 2, 3, 4, 5 ]
// //使用Array.of()解决上述问题
// let arr1 = Array.of(10)
// console.log(arr1) //[ 10 ]
// let arr2 = Array.of(1, 2, 3, 4, 5)
// console.log(arr2) //[ 1, 2, 3, 4, 5 ]

// //Array.from()的使用
// // 传入一个参数时，实现一个简单的数组复制
// let arr = [1, 2, 3, 4, 5, 6]
// let copyArr1 = Array.from(arr)
// console.log(copyArr1) //[ 1, 2, 3, 4, 5, 6 ]
// //传入2个参数时，原对象(arr)中的每个元素都会传入这个函数(back)
// let copyArr2 = Array.from(arr,back)
// //设置一个回调函数,将数值*2
// function back(n) {
//     return n*=2
// }
// console.log(copyArr2)  //[ 2, 4, 6, 8, 10, 12 ]

// //读取数组元素
// //数组也是一种特殊的对象，数组索引就是一种特殊的对象属性
// let arr = []
// //只有整数属性名才是索引
// arr['2.58'] = 2.58  //创建了一个属性'2.58'
// console.log(arr.length) //0
// arr[5.00] = 100 //相当于arr[5] = 100
// console.log(arr.length) //6
// //读取不存在的属性名，返回undefined
// console.log(arr[10])    //undefined

// //稀疏数组：其元素没有从0开始的索引的数组
// //创建稀疏数组
// let arr1 = new Array(100)
// console.log(arr1[10])   //undefined
// //可以把系数矩阵理解为包含undefined的非稀疏矩阵数组

// //添加和删除数组元素
// let arr = [1, 2, 3, 4, 5]
// //添加元素
// arr.push(6) //向数组末尾添加一个或多个元素
// console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]
// arr.push(7, 8, 9, "end")
// console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, end]
// arr.unshift("start", 0) //向数组开头添加一个或多个数组元素
// console.log(arr) //[ 'start', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, end ]
// //删除元素
// arr.pop() //删除数组最后一个元素
// console.log(arr) //[ 'start', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// arr.shift() //删除数组开头的第一个元素
// console.log(arr) // [(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)]
// //使用delete删除数组元素
// delete arr[5] //删除下标为5 的元素
// console.log(arr) //[ 0, 1, 2, 3, 4, <1 empty item>, 6, 7, 8, 9 ]
// console.log(arr.length) //10 , delete操作符不会改变数组的长度和索引值

// //迭代数组
// //使用entires()方法循环数组，并使用元素索引
// //例如求下面数组中所有索引值为偶数的数组元素
// let arr = [1, 2, 3, 4, 5, 6]
// let a = []
// for (const [index, value] of arr.entries()) {
//   if (index % 2 == 0) {
//     a.push(value)
//   }
// }
// console.log(a) //[ 1, 3, 5 ]
//使用foreach()循环数组，并使用函数
//下面将使用foreach将数组中的所有元素转换为大写字母，并保存到一个新的数组元素中
// let arr = [..."hello"] //[ 'h', 'e', 'l', 'l', 'o' ]
// let a = []
// arr.forEach((letter) => a.push(letter.toUpperCase())) //将字母转换为大写并保存到数组a中
// console.log(a) //[ 'H', 'E', 'L', 'L', 'O' ]

// // map()的使用
// let arr = [1,2,3]
// let a = arr.map((n) => n * n)   //map()方法调用指定函数，返回这个返回值构成的数组
// console.log(a)  //[ 1, 4, 9 ]

// //filter的使用
// let arr = [1, 2, 3, 4, 5, 6]
// let a = arr.filter((n) => n % 2 == 0) //返回数组中所有的偶数
// console.log(a) //[ 2, 4, 6 ]
//使用filter除去稀疏数组中的空隙
// let arr = [1, , 3, , undefined, 6, 7, null, 8]
// let a = arr.filter(() => true) //除去数组中的空隙
// console.log(a) //[ 1, 3, undefined, 6, 7, null, 8 ]
// //并除去稀疏数组中的null和undefined
// let b = arr.filter((n) => n !== undefined && n !== null)
// console.log(b) //[ 1, 3, 6, 7, 8 ]

// //find()和findIndex()与filter()类似
// // find()返回第一个匹配元素，如果没有找到匹配元素，则返回undefined
// // findIndex()返回匹配元素的索引,如果没有找到匹配元素，则返回-1
// let a = [..."hello,everyone"]
// console.log(a.find((n) => n === "o")) //o,返回匹配的元素
// console.log(a.findIndex((n) => n === "o")) //4，返回匹配元素的索引
// console.log(a.find((n) => n === "d")) //undefined
// console.log(a.findIndex((n) => n === "d")) //-1

// // every()和some()，都是数组断言方法
// // every()相当于数学里面的“任意的”符号
// // some()相当于数学里面的“存在”符号
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.every((n) => n <= 10)) //true
// console.log(arr.every((n) => n <= 4)) //false
// console.log(arr.some((n) => n === 5)) //true
// console.log(arr.some((n) => n > 10)) //false

// // reduce()和reduceRight()
// // reduce()的使用，reduce()有2个参数，
// // 第一个参数是归并的函数，第二个是可选的，传给归并函数的初始值
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.reduce((a, b) => a + b, 0)) //15,后面这个0为归并函数的初始值
// console.log(arr.reduce((a, b) => a * b, 1)) //120,后面这个1为归并函数的初始值
// //reduceRight()的使用，与reduce()类似
// // 只不过是数组索引值从高到低（从右向左）处理数组
// console.log(arr.reduceRight((a, b) => a + b, 0)) //15

// // flat()和flatMap()的使用
// let arr1 = [1, 2, [3, 4], 5] //里面含有一级嵌套
// console.log(arr1.flat()) //[ 1, 2, 3, 4, 5 ],默认为打平一级嵌套
// let arr2 = [1, [2, 3, [4, 5]]] //里面含有2级嵌套
// console.log(arr2.flat()) //[ 1, 2, 3, [ 4, 5 ] ],打平一级嵌套后
// //如果要打平更多级嵌套，可以在flat()里面指定层级
// console.log(arr2.flat(2)) //[ 1, 2, 3, 4, 5 ],打平2级嵌套后
// //flatMap()会自动打平数组中所有层级嵌套
// let arr = ["talk is cheap", ",", "show me the code"]
// console.log(arr.flatMap((n) => n.split(" ")))
// //[("talk", "is", "cheap", ",", "show", "me", "the", "code")]

// //copyWithin()的使用，不会改变数组的长度
// // 第一个参数：复制粘贴到的位置
// //第二个参数：要复制的第一个元素的索引，如果没有，默认为0
// // 第三个参数：要复制的最后一个元素的索引，如果没有，默认为数组长度
// let arr = [1, 2, 3, 4, 5]
// console.log(arr.copyWithin(2)) //[ 1, 2, 1, 2, 3 ],默认从索引为2处复制整个数组
// console.log(arr.copyWithin(2, 3, 4)) //[ 1, 2, 2, 2, 3 ]
// console.log(arr.copyWithin(2, -2)) //[ 1, 2, 2, 3, 3 ]

// // includes()的使用
// // 用来测试数组的成员是否属于某个集合
// // includes()与indexOf()区别：indexOf()无法检测数组中的NaN值，includes()可以
// let arr = [1,2,null,undefined,4,NaN]
// console.log(arr.indexOf(null))  //2，null可以判断
// console.log(arr.indexOf(NaN))   //-1,无法判断，实际上NaN存在数组里面
// console.log(arr.includes(NaN))  //true,includes()可以判断

// // sort()的使用
// let arr1 = [24, 14, 5, 12, 52]
// console.log(arr1.sort((a, b) => a - b)) //[ 5, 12, 14, 24, 52 ],从小到大排序
// console.log(arr1.sort((a, b) => b - a)) //[ 52, 24, 14, 12, 5 ],从大到小排序
// let arr2 = [16, 33, 20, 5, 10, 3, undefined, 45]    //未定义的元素排到数组末尾
// console.log(arr2.sort((a, b) => a - b)) //[ 3, 5, 10, 16, 20, 33, 45, undefined ]
// console.log(arr2.sort((a, b) => b - a)) //[ 45, 33, 20, 16, 10, 5, 3, undefined ]

// //字符串和数组的相互转化
// //字符串转换为数组
// let str = "hello"
// // 使用Array.from()方法
// console.log(Array.from(str)) //[ 'h', 'e', 'l', 'l', 'o' ]
// // 使用扩展操作符
// console.log([...str]) //[ 'h', 'e', 'l', 'l', 'o' ]

// //数组转换为字符串
// let arr = ["h", "e", "l", "l", "o"]
// //使用join()
// console.log(arr.join()) //'h,e,l,l,o,'默认是使用逗号隔开
// console.log(arr.join("")) //'hello'
// //使用toString()方法，解决不了
// console.log(arr.toString()) //'h,e,l,l,o',与没有参数的join()方法一样
// //使用toLocaleString()方法，解决不了
// console.log(arr.toLocaleString()) //'h,e,l,l,o'，与toString()方法感觉没什么区别

// //在字符串中使用[]读取字符
// let str = 'hello'
// console.log(str[1]) //'e'

// //将字符串数组转换为数字数组
// let strArr = ["1", "2", "3", "4", "5"]
// let numArr = strArr.map(Number)
// console.log(numArr) //[ 1, 2, 3, 4, 5 ]

// //将数字数组转换为字符串数组
// let num = [1, 3, 5, 2, 6]
// let str = num.map(String)
// console.log(str) //[ '1', '3', '5', '2', '6' ]