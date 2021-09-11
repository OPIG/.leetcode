/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let memo = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    memo[i] = Math.max(memo[i - 1] + nums[i], nums[i])
  }

  return Math.max.apply(null, memo)
}
// @lc code=end
