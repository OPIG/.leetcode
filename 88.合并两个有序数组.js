/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let n1 = nums1.slice(0, m)
  let n2 = nums2.slice(0, n)
  let temp = n1.concat(n2).sort((a, b) => a-b)
  return nums1.splice(0, m+n, ...temp)
};
// @lc code=end

