/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//  最佳算法是KMP: https://www.cnblogs.com/yjiyjige/p/3263858.html
var strStr = function(haystack, needle) {
  if(needle == '') return 0
  for(let i = 0; i<haystack.length; i++) {
    if(haystack[i] == needle[0]) {
      if(haystack.substring(i, i + needle.length) == needle) {
        return i
      }
    }
  }
  return -1
};
// @lc code=end

