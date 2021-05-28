//方法1
let addTwoNumbers = function (l1, l2) {
  let str1 = l1.reverse().join("")
  let str2 = l2.reverse().join("")
  let s = parseInt(str1) + parseInt(str2)
  let result = [...s.toString()].reverse() //[ '7', '0', '8' ]
  return result.map(Number) //[ 7, 0, 8 ]
}
console.log(addTwoNumbers([3, 4, 2], [4, 6, 5]))

//方法2
let list = new ListNode()

