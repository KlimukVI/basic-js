const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0) {
      this.arr = [];
      throw new Error;
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.map((i) => `( ${i} )`).join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
