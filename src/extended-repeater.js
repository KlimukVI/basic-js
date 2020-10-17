const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addStr, pickStr;
  if (options.repeatTimes === undefined) { options.repeatTimes = 1; }
  if (options.additionRepeatTimes === undefined) { options.additionRepeatTimes = 1; }
  if (!options.separator) {options.separator = '+'}
  if (!options.additionSeparator) {options.additionSeparator = '|'}
  if (options.addition === undefined) { addStr = ''; }
  else {
    addStr = String(options.addition).concat(options.additionSeparator).repeat(options.additionRepeatTimes).slice(0,-options.additionSeparator.length);
  }
  pickStr = String(str).concat(addStr).concat(options.separator).repeat(options.repeatTimes).slice(0,-options.separator.length);
  return pickStr;
};