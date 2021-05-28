/**
 * @param {string} s
 * @return {number}
 */
/*
//方法1
let romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    II: 2,
    III: 3,
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (i !== s.length - 1) {
      if (map[s[i]] >= map[s[i + 1]]) {
        result += map[s[i]]
      } else {
        result -= map[s[i]]
      }
    } else {
      result += map[s[i]]
    }
  }
  return result
}
console.log(romanToInt("DCXXI"))
*/


//方法2
let romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    II: 2,
    III: 3,
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    // if (i !== s.length - 1) {
    if (map[s[i]] < map[s[i + 1]]) {
      //这里数组越界会返回undefined,为0
      result -= map[s[i]]
    } else {
      result += map[s[i]]
      // 所以字符串最后一个字符一定会执行else语句
    }
    // }
    // else {
    //   result += map[s[i]]
    // }
  }
  return result
}
console.log(romanToInt("DCXXI"))
