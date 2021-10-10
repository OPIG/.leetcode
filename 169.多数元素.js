/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 1
// var majorityElement = function (nums) {
//   var obj = {}
//   for (var i of nums) {
//     if (Object.keys(obj).includes(String(i))) {
//       obj[i] = Number(obj[i]) + 1
//     } else {
//       obj[i] = 1
//     }
//   }
//   for (let j in obj) {
//     if (obj[j] > nums.length / 2) {
//       return Number(j)
//     }
//   }
// };

// slution 2
// var majorityElement = function(nums) { 
//   const map = {}
//   const n = nums.length >> 1 // >>是右移运算符，意思是除以2
//   for(let i = 0; i < nums.length; i++) {
//     map[nums[i]] = map[nums[i]] != undefined ? map[nums[i]] + 1 : 1
//     if(map[nums[i]] > n) return nums[i]
//   }
// }

// solution 3
var majorityElement = function(nums) {
  // 两两抵消，剩下的最后一个候选者，然后再计算剩下的最后一个候选者出现的次数
  const N = nums.length;

  if (!nums || N === 0) {
    return -1;
  }

  let candidate = null; // 候选者
  let restHP = 0; // 血量
 //  [1,2,3,4,5]

  for (let i = 0; i < N; i++) {
    let _candidate = nums[i];
    if (restHP === 0) {
      candidate = _candidate;
      restHP = 1;
    } else if (candidate !== _candidate) {
      restHP--;
    } else {
      restHP++;
    }
  }

  if (restHP === 0) {
    return -1;
  }
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (nums[i] === candidate) {
      count++
    }
  }

  // N >> 1 相当于N/2
  return count > N >> 1 ? candidate : -1;
};
// @lc code=end

