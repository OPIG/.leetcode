/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sLen = s.length
  const tLen = t.length
  if(sLen != tLen) return false
  // let s1 = s.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).toString()
  // let t1 = t.split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).toString()
  // return s1 == t1

  const map = {}
  for(let i = 0; i < sLen; i++) {
    const currentS = s[i]
    const currentT = t[i]
    map[currentS] ? map[currentS]++ : map[currentS] = 1
    map[currentT] ? map[currentT]-- : map[currentT] = -1
  }

  return Object.values(map).every(item => item === 0)

};
// @lc code=end

