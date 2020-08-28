"use strict";

/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
// @lc code=start

/**
 * @param {number} x
 * @return {boolean}
 */
//resolution 1
// var isPalindrome = function(x) {
//     if( x < 0 ) return false
//     x = String(x)
//     for(let i=0,len=x.length; i<len/2; i++){
//         if( x[i] != x[len - i -1]) return false
//     }
//     return true
// };
//resolution 2
// var isPalindrome = function(x) {
//     if(x<0) return false
//     let res = 0
//     let originX = x
//     while(x){
//         res = res*10 + x%10
//         x = parseInt(x/10)
//     }
//     return originX === res? true: false
// };
//resolution 3
var isPalindrome = function isPalindrome(x) {
  if (x < 0) return false;
  var ren = 0;

  for (var i = x; i >= 1; i = Math.floor(i / 10)) {
    ren = ren * 10 + i % 10;
  }

  return ren === x;
}; // @lc code=end


var test = isPalindrome(-121);
console.log(test);