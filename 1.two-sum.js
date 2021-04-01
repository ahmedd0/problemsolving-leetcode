/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let myNum;
  let arr = [];
  if (nums.length <= Math.pow(10, 3)) {
    main: for (let i = 0; i < nums.length; i++) {
      myNum = target - nums[i];
      if (
        nums[i] <= Math.pow(10, 9) &&
        nums[i] >= Math.pow(-10, 9) &&
        target <= Math.pow(10, 9) &&
        target >= Math.pow(-10, 9)
      ) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] == myNum) {
            arr.push(i, j);
            break main;
          }
        }
      }
    }
  }

  return arr;
};
// @lc code=end
