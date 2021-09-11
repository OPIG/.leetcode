/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  const memo = []
  if (s.length % 2 != 0) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      memo.push(map.get(s[i]))
    } else {
      if (memo.pop() != s[i]) {
        return false
      }
    }
  }

  if (memo.length > 0) {
    return false
  }
  return true
}
// @lc code=end
