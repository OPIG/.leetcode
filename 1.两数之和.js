/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity O(n)
 * Space Complexity O(n)
 * method: hash map
 */
// var twoSum = function(nums, target) {
//   var mapping = {}
//   for(var i = 0; i < nums.length; i++) {
//     var temp = target - nums[i]
//     if(Object.keys(mapping).includes(''+temp)) {
//       return [mapping[temp], i]
//     }
//     else {
//       mapping[nums[i]] = i
//     }
//   }
// };

var twoSum = function(nums, target) {
  const map = new Map()
  for(let i = 0, len = nums.length; i < len; i++) {
    if(map.get(nums[i]) !=  undefined) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
  return []
}
// @lc code=end

