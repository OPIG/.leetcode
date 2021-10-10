/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   if (nums.length == 1) { return nums[0] }
//   else {
//     nums.sort()

//     for (let i = 0; i <= nums.length - 1; i++) {
//       if (nums[i] == nums[i + 1]) {
//         ++i
//         continue
//       } else {
//         return nums[i]
//       }
//     }
//   }
// };


/*
异或，是一个数学运算符，英文为exclusive OR，缩写为xor，应用于逻辑运算。异或的数学符号为“⊕”，计算机符号为“xor”。其运算法则为：

  a⊕b = （¬a ∧ b） ∨ （a ∧¬b）

  如果a、b两个值不相同，则异或结果为1。如果a、b两个值相同，异或结果为0。

  异或也叫半加运算，其运算法则相当于不带进位的二进制加法：二进制下用1表示真，0表示假，则异或的运算法则为：0⊕0=0，1⊕0=1，0⊕1=1，1⊕1=0（同为0，异为1），这些法则与加法是相同的，只是不带进位
*/
function singleNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
}

// function singleNumber(nums) {
//   let init = nums[0];
//   for(let i = 1; i < nums.length; i++){
//       init ^=  nums[i];
//   }
//   return init;
// };

// var singleNumber = function (nums) {
//   let N = nums.length;
//   let flg = null;
//   let hp = 0;
//   let count = 1;

//   nums.sort();

//   for (let i = 0; i < N; i++) {
//     if (hp === 0) {
//       flg = nums[i]
//       hp = 1
//     } else {
//       if (flg === nums[i]) {
//         hp = 0;
//       } else {
//         count++
//       }
//     }
//     if (count >= 2) {
//       return flg
//     }
//   }
//   return flg
// };

// @lc code=end



