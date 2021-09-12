/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let direction = 'right'
  let top = 0
  let left = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  const memo = []
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        memo.push(matrix[top][i])
      }
      direction = 'down'
      top++
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        memo.push(matrix[i][right])
      }
      right--
      direction = 'left'
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        memo.push(matrix[bottom][i])
      }
      direction = 'top'
      bottom--
    } else if (direction === 'top') {
      for (let i = bottom; i >= top; i--) {
        memo.push(matrix[i][left])
      }
      direction = 'right'
      left++
    }
  }

  return memo
}
// @lc code=end
