/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

 // reverse(-2147483648) 
// var reverse = function(x) {
//     let flag = 0 //check is negative or not 0 is positive 1 is negative
//     let x_str = x.toString()
//     let arr = []
//     let reverseInteger = 0
//     if(x_str.charAt(0)-0){
//         arr = [...x_str.substr(0)]
//         flag = 0
//     }else{
//         arr = [...x_str.substr(1)]
//         flag =1
//     }
//     arr.reverse()
//     if(flag){
//         reverseInteger = -Number(arr.join(''))
//     }else{
//         reverseInteger = Number(arr.join(''))
//     }
//     if(reverseInteger > Math.pow(2,31) || -reverseInteger > Math.pow(2,31)){
//         reverseInteger = 0
//     }

//     return reverseInteger
// };

var reverse = function(x){
    var result = 0
    while(x){
        result = result*10 + x%10
        x = parseInt(x/10)
    }
    if(result > Math.pow(2,31) || -result > Math.pow(2,31)){
        result = 0 
    }

    return result
}
// @lc code=end
var t = reverse(-2147483648)
console.log(t)

