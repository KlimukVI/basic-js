const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error;}
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (arr[i-2] !== '--discard-next' && i !== 0) { arrNew.pop(); }
        break;
      case '--double-next':
        if (i < arr.length - 1) { arrNew.push(arr[i+1]); }
        break;
      case '--double-prev':
        if (arr[i-2] !== '--discard-next' && i !== 0) { arrNew.push(arr[i-1]); }
        break;
      default:
        arrNew.push(arr[i]);
    }
  }
  return arrNew;
};
