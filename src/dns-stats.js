const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let n = 0;
  let newArr=[];
  let arr=[];
  let newStr='';
  let str = domains;
  for (let i=0;i<domains.length; i++) {
    str[i]+='.';
    while(str[i].indexOf('.')!=-1) {
      newArr.push(str[i].slice(0,-1));
      str[i]=str[i].slice(str[i].indexOf('.')+1);
    }
  }
  for (let i=0;i<newArr.length;i++) {
    if (arr.indexOf(newArr[i]) == -1) {
      arr.push(newArr[i]);
    }
  }
  arr.sort((a,b) => a.length-b.length);
  let countArr = [];
  for (let i=0;i<arr.length;i++) {
    countArr[i]=0;
    for (let j=0;j<newArr.length;j++) {
      if (newArr[j]==arr[i]) {
        countArr[i]+=1;
      }
    }
  }
  let reverseArr = [];
  let result = new Object();
  for (let i=0;i<arr.length;i++) {
    reverseArr = arr[i].split('.');
    reverseArr.reverse();
    newStr = '.'+reverseArr.join('.');
    result[newStr] = countArr[i];
  }
  return result;
}

module.exports = {
  getDNSStats
};
