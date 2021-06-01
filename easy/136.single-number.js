/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let theNum;
  loop1: for (let i = 0; i < nums.length; i++) {
    let err = 0;
    loop2:for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) {
        err = err+1;
      }else{
          continue
      }
    }
    if(err > 0){
        continue
    }
    else{
        theNum = nums[i]
        break loop1

    }
  }
  return theNum;
};

// @lc code=end
