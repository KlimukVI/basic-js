const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.reverseMachine = !type;
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) { throw new Error; }
    let text = message.toUpperCase().split('').filter(item => /^[A-Z]/.test(item));
    let textFull = message.split('');
    let textToNum = text.map(item => +item.replace(item, this.alphabet.indexOf(item)));
    let keyword = key.toUpperCase().repeat(Math.ceil(text.length/key.length)).slice(0,text.length).split('');
    let keywordToNum = keyword.map(item => +item.replace(item, this.alphabet.indexOf(item)));
    let cryptText = textToNum.map((item, index) => this.alphabet[(item + keywordToNum[index]) % this.alphabet.length]);
    let result = [];
    for (let i = 0, j = 0; i < textFull.length; i++, j++) {
      if (/^[A-Za-z]/.test(textFull[i])) {
        result.push(cryptText[j]);
      } else {
        result.push(textFull[i]);
        j--;
      }
    }
    return this.reverseMachine ? result.reverse().join('') : result.join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) { throw new Error; }
     let text = message.toUpperCase().split('').filter(item => /^[A-Z]/.test(item));
    let textFull = message.split('');
    let textToNum = text.map(item => +item.replace(item, this.alphabet.indexOf(item)));
    let keyword = key.toUpperCase().repeat(Math.ceil(text.length/key.length)).slice(0,text.length).split('');
    let keywordToNum = keyword.map(item => +item.replace(item, this.alphabet.indexOf(item)));
    let decryptText = textToNum.map((item, index) => (item - keywordToNum[index]) >= 0 ? this.alphabet[(item - keywordToNum[index])] : this.alphabet[(item - keywordToNum[index]) + this.alphabet.length]);
    let result = [];
    for (let i = 0, j = 0; i < textFull.length; i++, j++) {
      if (/^[A-Z]/.test(textFull[i])) {
        result.push(decryptText[j]);
      } else {
        result.push(textFull[i]);
        j--;
      }
    }
    return this.reverseMachine ? result.reverse().join('') : result.join('');
  }
}

module.exports = VigenereCipheringMachine;
