const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let pos=-1;
  let str ='';
  for (let i=0;i<email.length;i++) {
    if (email[i] == '@') {
      str='';
      pos = i;
    } else {
      str+=email[i];
    }
  }
  if (pos == -1 ) {
    return false;
  } else {
    return str;
  } // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
