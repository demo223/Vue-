/**
 * @param {string[]} strs
 * @return {string}
 */
//方法1：暴力解法
let longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  let result = strs[0] //将第一个字符串作为最大公共前缀
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (j; j < result.length; j++) {
      if (result[j] !== strs[i][j]) {
        break //第一个字符串与当前字符串中的字符不相等
      }
    }
    result = result.substring(0, j)
    if (result === "") return ""
  }
  return result
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
