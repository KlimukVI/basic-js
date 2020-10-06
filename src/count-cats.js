const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let counts = 0;
  backyard.flat().forEach((i) => i === '^^' ? counts++ : counts);
  return counts;
};
