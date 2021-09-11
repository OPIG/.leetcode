/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let sum = 0
//   let memo = []
//   for(let i = 0; i < s.length; i++) {
//     while(memo.includes(s[i])) {
//       memo.shift()
//     }
//     memo.push(s[i])
//     sum = Math.max(sum, memo.length)
//   }

//   return sum
// };

var lengthOfLongestSubstring = function(s) {
  let sum = 0
  let memo = new Set()
  let j = 0
  for(let i = 0; i < s.length; i++) {
    while(memo.has(s[i])) {
      memo.delete(s[j])
      j++
    }
    memo.add(s[i])
    sum = Math.max(sum, memo.size)
  }

  return sum
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end