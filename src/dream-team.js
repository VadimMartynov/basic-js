const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let newMas = [], str='',k=0;
  if (!Array.isArray(members)) return false; 
  for (let i=0;i<members.length;i++) {
    if (typeof(members[i]) == 'string') {
      str=members[i].trim();
      newMas.push(str[0].toUpperCase());
      k++;
    }
  }
  if (!k) return false;
  newMas.sort();
  return newMas.join('');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
