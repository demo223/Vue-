/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出
和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案
里不能重复出现。你可以按任意顺序返回答案。
*/

// 方法1
/*
    var twoSum = function (nums, target) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            arr.push(i, j)
        }
        }
    }
    return arr
    }
*/

//方法2
var twoSum = function (nums, target) {
  let arr = []
  for (let i = 0; i < nums.length && nums[i] !== undefined; i++) {
    let cha = target - nums[i]
    let index = nums.indexOf(cha)
    if (index !== -1 && index !== i) {
      //证明存在
      arr.push(i, index)
      delete nums[index]
    }
  }
  return arr
}

//方法3
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let cha = target - nums[i]
    if (nums.includes(cha) && nums.indexOf(cha, i + 1) !== -1) {
      // 两个元素可能相等
      return [i, nums.indexOf(cha, i + 1)] //数组中可能有重复的元素
    }
  }
}

console.log(twoSum([3, 2, 4], 6))
// let map = new Map()
// map.set(1, "a")
// map.set(2, "b")
// map.set(3, "c")
// map.set(4, "d")
// console.log(map.has(2)) //true
// console.log(map.get(1)) //'a'
// console.log(map.get(2)) //'b'
// console.log(map.get(6)) //undefined
// console.log(map.size) //2
// console.log(map.keys()) //{1,2}
// console.log(map.values()) //{'a','b'}
// // console.log(map.clear())    //移除Map对象中的所有元素
// console.log(map.delete(1)) //true,对象中存在该元素，则移除它并返回true
