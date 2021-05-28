/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// //方法1：数组求解（但题目规定使用链表）
// var mergeTwoLists = function (l1, l2) {
//   let arr = [...l1, ...l2]
//   arr.sort()
//   return arr
// }
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

// //方法2：使用链表
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val
//   this.next = next === undefined ? null : next
// }
// var mergeTwoLists = function (l1, l2) {
//   if (l1 === null) return l2
//   if (l2 === null) return l1
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2)
//     return l1
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next)
//     return l2
//   }
// }
// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))