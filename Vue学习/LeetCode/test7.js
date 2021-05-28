// let reverse = function (x) {
//   let result = 0
//   while (x) {
//     result = result * 10 + x % 10
//     if (result > Math.pow(2, 31) || result < Math.pow(-2, 31)) {
//       return 0
//     } else {
//       x = ~~(x / 10)
//     }
//   }
//   return result
// }
// console.log(reverse(-123))

// //使用!!可以快速得到一个数据的布尔值
// //只有null，undefined，false，0，""，NaN
// console.log(!!123) //true
// console.log(!!"hello") //true
// console.log(!!{}) //true,任何对象都返回true
// console.log(!!null) //false
// console.log(!!NaN) //false
// console.log(!!0) //false
// console.log(!!undefined) //false
// console.log(!!"") //false

// //使用~~可以将浮点数变成整数
// //操作符~， 是按位取反的意思，
// // 表面上~~（取反再取反）没有意义，实际上在JS中可以将浮点数变成整数。
// // 除去小数点位，保留整数位
// console.log(~~(12 / 10)) //1,注意加括号
// console.log(~~(18 / 10)) //1
// console.log(~~3.14) //3
// console.log(~~0.2)  //0
// console.log(~~-1.2) //-1
// console.log(~~-1.8) //-1

let reverse = function (x) {
  let sum = 0
  while (x) {
    sum = sum * 10 + (x % 10)
    // 如果反转后整数超过 32 位的有符号整数的范围
    // [−2 ^ 31, 2 ^ 31 − 1] ，就返回 0。
    if (sum < Math.pow(-2, 31) || sum > Math.pow(2, 31) - 1) {
      return 0
    } else {
      x = ~~(x / 10)
    }
  }
  return sum
}
