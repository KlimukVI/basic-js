const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!(/^[0-9.]+$/).test(sampleActivity) || typeof(sampleActivity) != 'string') {return false;}
  let k = Math.LN2/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  let result = (t < 0 || t === Infinity) ? false : Math.ceil(t);
  return result;
};
