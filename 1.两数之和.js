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
 */
var twoSum = function(nums, target) {
  var mapping = {}
  for(var i = 0; i < nums.length; i++) {
    var temp = target - nums[i]
    if(Object.keys(mapping).includes(''+temp)) {
      return [mapping[temp], i]
    }
    else {
      mapping[nums[i]] = i
    }
  }
};
// @lc code=end

