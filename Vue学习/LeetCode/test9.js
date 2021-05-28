let isPalindrome = function (x) {
  let flag = 0
  let start = x //保留x的初始值
  while (x) {
    if (x < 0) {
      return false
    }
    flag = flag * 10 + (x % 10)
    x = ~~(x / 10)
  }
  return flag === start
}
// console.log(isPalindrome(12321)) //true
// console.log(isPalindrome(-121)) //false