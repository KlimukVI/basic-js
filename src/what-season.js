const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {return 'Unable to determine the time of year!';}
  if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {throw new Error;}
  if (/^(0?[01]|1[1])$/.test(date.getMonth())){return 'winter';}
  if (/^(0?[2-4])$/.test(date.getMonth())){return 'spring';}
  if (/^(0?[5-7])$/.test(date.getMonth())){return 'summer';}
  if (/^(0?[8-9]|1[0])$/.test(date.getMonth())){return 'autumn';}
};
