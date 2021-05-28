/**
 * @param {string} s
 * @return {boolean}
 */
//使用栈
var isValid = function (s) {
  let result = false
  let map = {   //创建一个hash表
    "(": 1,
    ")": -1,
    "[": 2,
    "]": -2,
    "{": 3,
    "}": -3,
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) {
      //左括号
      stack.push(s[i]) //入栈
    } else {
      //右括号
      if (stack.length === 0 || stack.indexO) {
        return result
      } else {
        // console.log("哈希值" + map[s[i]])
        if (map[s[i]] + map[stack[stack.length - 1]] === 0) {
          //括号匹配
        //   console.log("出栈前：" + stack)
          stack.pop()
        //   console.log("出栈后：" + stack)
        } else {
          //括号不匹配
          stack.push(s[i]) //入栈
        }
      }
    }
  }
  return stack.length === 0
}
console.log(isValid("[(])"))
