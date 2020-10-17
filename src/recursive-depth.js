const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) { throw new Error; }
    let depth = 1;
    if (arr.map(i => Array.isArray(i)).indexOf(true) !== -1) {
      depth = 1 + this.calculateDepth(arr.flat(depth));
    }
    return depth;
  }
};