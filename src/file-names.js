const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let k=0;
  let arr=[];
  let oldArr=[];
  for (let i=0;i<names.length;i++) {
    if (arr.indexOf(names[i])==-1) {
      oldArr.push(names[i]);
      arr.push(names[i]);
    } else {
      for (let j=0;j<oldArr.length;j++) {
        if (oldArr[j] == names[i]) {
          k++;
        }
      }
      oldArr.push(names[i]);
      oldArr.push(`${names[i]}(${k})`);
      arr.push(`${names[i]}(${k})`);
      k=0;
    }
  }
  console.log(oldArr)
  return arr;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
