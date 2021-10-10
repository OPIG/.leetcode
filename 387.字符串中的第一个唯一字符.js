/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// solution1 
// var firstUniqChar = function(s) {
//   let map = new Map()
//   for(let i of s) {
//     if(map.has(i)) {
//       map.set(i, map.get(i)+1)
//     } else {
//       map.set(i, 1)
//     }
//   }

//   for(let i in s) {
//     if(map.get(s[i]) == 1) {
//       return i
//     }
//   }  
//   return -1
// };

// solution 2
var firstUniqChar = function(s) { 
  let map = {}
  for(let i of s) {
    map[i] = (map[i] || 0) + 1
  }

  for(let i =0; i< s.length; i++) {
    if(map[s[i]] === 1) {
      return i
    }
  }
  return -1
}
// @lc code=end

