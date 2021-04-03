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
var reverse = function (x) {
  let res;
  if (x > 0) {
    let y = x.toString().split("").reverse();
    res = Number(y.join(""));
  } else {
    let y = Math.abs(x);
    let n = y.toString().split("").reverse();

    res = -Number(n.join(""));
  }
  if (res >= Math.pow(-2, 31) && res <= Math.pow(2, 31) - 1) {
    return res;
  } else {
    return 0;
  }
};
// @lc code=end
