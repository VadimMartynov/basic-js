const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let k=1;
  let newStr='';
  for (let i=0;i<str.length;i++) {
    if (str[i+1] == str[i]) {
      k+=1;
    } else {
      if (k==1) {
        newStr+=str[i];
      } else {
        newStr+= k + str[i];
        k=1;
      }
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
