/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

 //resolution 1
// var romanToInt = function(s) {
//     var arr = s.split('')
//     var newArr = []
//     newArr = arr.map((item,index)=>{
//         switch(item){
//             case 'I':{item = 1};break;
//             case 'V':{item = 5};break;
//             case 'X':{item = 10};break;
//             case 'L':{item = 50};break;
//             case 'C':{item = 100};break;
//             case 'D':{item = 500};break;
//             case 'M':{item = 1000};break;
//             default: {item = 0}; break;
//         }
//         return item
//     })
//     for(let i= 0 ; i< newArr.length -1; i++){
//         if(newArr[i]<newArr[i+1]){
//             newArr[i]=-newArr[i]
//         }
//     }
//     var sum = newArr.reduce((item1,item2)=>{
//         return parseInt(item1)+parseInt(item2)
//     })

//     return sum
    
// };


//resolution 2
var romanToInt = function(s) {
    var arr = s.split('')
    var newArr = []
    var codeMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    newArr = arr.map((item,index)=>{
        item = codeMap[item]
        return item
    })
    for(let i= 0 ; i< newArr.length -1; i++){
        if(newArr[i]<newArr[i+1]){
            newArr[i]=-newArr[i]
        }
    }
    var sum = newArr.reduce((item1,item2)=>{
        return parseInt(item1)+parseInt(item2)
    })

    return sum
    
};
// @lc code=end

let test = romanToInt ("MCMXCIV")
console.log(test)