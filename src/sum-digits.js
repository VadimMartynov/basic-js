const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let k=n,count=0;
  while (k) {
    if (k % 10 == 0) {
      k/=10;
    } else {
      count+=k%10;
      k=Math.floor(k/10);
    }
  }
  if (count>9) {
    return getSumOfDigits(count);
  } else {
    return count;
  }
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
