const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let result;
  if (typeof(sampleActivity) != 'string') return false;
  let sampleNumber = +sampleActivity;
  if (isNaN(sampleNumber)) return false;
  if (sampleNumber<=0 || sampleNumber > 15) return false;
  result = Math.log(MODERN_ACTIVITY/sampleNumber)/(0.693/HALF_LIFE_PERIOD);
  return Math.ceil(result);
}

module.exports = {
  dateSample
};
