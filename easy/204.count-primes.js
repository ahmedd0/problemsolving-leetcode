/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primsNums = 0;

  if (n == 0 || n == 1 || n == 2) {
    return 0;
  }
  if (n >= 0 && n <= 5 * Math.pow(10, 6)) {
    for (let i = 2; i < n; i++) {
      let err = 0;
      loop2: for (let j = 2; j < i; j++) {
        if (i % j != 0) {
          continue;
        } else {
          err++;
          break loop2;
        }
      }
      if (err == 0) {
        primsNums++;
      } else {
        continue;
      }
    }
  }

  return primsNums;
};
// @lc code=end
