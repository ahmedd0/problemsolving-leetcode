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
function getLenth(x) {
  let y = Math.abs(x);
  let length = 0;
  while (y != 0) {
    y = Math.floor(y / 10);
    length++;
  }
  return length;
}
var isPalindrome = function (x) {
  let num = Math.abs(x);

  let len = getLenth(num) - 1;
  let n = 0;
  for (let i = len; i >= 0; i--) {
    n += (num % 10) * Math.pow(10, i);
    num = Math.floor(num / 10);
  }
  console.log(n);
  if (n == x) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
