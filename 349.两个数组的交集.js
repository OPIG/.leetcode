/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   // 使用set，空间复杂度和时间复杂度都太高，不太优雅
//   return [...new Set(nums1)].filter(item => new Set(nums2).has(item))
// };

var intersection = function(nums1, nums2) {
  const map = {}
  const ret = []
  for(let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true
  }

  for(let i = 0; i < nums2.length; i++) {
    if(map[nums2[i]]) {
      ret.push(nums2[i])
      map[nums2[i]] = false
    }
  }

  return ret
};
// @lc code=end

