/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let arr = [];
    loop1:for(let i=0;i<numbers.length;i++){
        let difference = target - numbers[i];
        for (let j = 0; j < numbers.length; j++) {
            if (i!=j && numbers[j]== difference) {
                arr.push(i+1,j+1)
                break loop1;
            }
            
        }
    }
    return arr;
};
// @lc code=end

