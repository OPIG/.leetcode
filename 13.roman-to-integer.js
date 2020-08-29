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
var romanToInt = function(s) {
<<<<<<< HEAD
    var arr = s.split('')
    var newArr = []
    newArr = arr.map((item,index)=>{
        switch(item){
            case 'I':{item = 1};break;
            case 'V':{item = 5};break;
            case 'X':{item = 10};break;
            case 'L':{item = 50};break;
            case 'C':{item = 100};break;
            case 'D':{item = 500};break;
            case 'M':{item = 1000};break;
            default: {item = 0}; break;
        }
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
    
=======
return 1    
>>>>>>> 502cb36d455dd9e6990a946505e16188df478853
};
// @lc code=end

let test = romanToInt ("MCMXCIV")
console.log(test)