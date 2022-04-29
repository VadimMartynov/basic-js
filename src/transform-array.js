const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [], i = 0;
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  while (i < arr.length) {
    if (arr[i] == '--discard-next') {
      if (i!=arr.length-1) {
        if ((arr[i + 2].includes('prev'))) {
          i += 3;
        } else {
          i += 2;
        }
      } else {
        i++;
      }
      continue;
    }
    if (arr[i] == '--discard-prev') {
      if (newArr.length > 1) {
        newArr.pop();
      }
      i++;
      continue;
    }
    if (arr[i] == '--double-next') {
      if (i!=arr.length-1) {
        newArr.push(arr[i + 1]);
      }
      i++;
      continue;
    }
    if (arr[i] == '--double-prev') {
      if (arr[i - 1]) {
        newArr.push(arr[i - 1]);

      }
      i++;
      continue;
    }
    newArr.push(arr[i]);
    i++;
  }
  return newArr;
  // remove line with error and write your code here
}

module.exports = {
  transform
};
