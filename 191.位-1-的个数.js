/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
/* 
 原理：
  每执行一次x = x & (x-1)，会将x用二进制表示时最右边的一个1变为0，
  因为x-1将会将该位(x用二进制表示时最右边的一个1)变为0。
  因此，对 x 重复该操作，直到 x 变成 0，
  则操作次数即为 x 的二进制数中的 1 的数目
*/
  let count = 0
  while(n) {
    n &= (n-1)
    count++
  }

  return count
};
// @lc code=end

