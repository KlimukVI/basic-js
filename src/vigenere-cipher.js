const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.reverseMachine = !type;
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) { throw new Error; }
    let text = message.toUpperCase().split('');
    let keyword = key.toUpperCase().split('');
    let encryptText = [];
    for (let i = 0, j = 0; i < text.length; i++) {
      if (j > keyword.length-1) { j = 0; }
      if (/^[A-Za-z]/.test(text[i])) {
        encryptText.push(this.alphabet[(this.alphabet.indexOf(text[i]) + this.alphabet.indexOf(keyword[j])) % this.alphabet.length]);
        j++;
      } else {
        encryptText.push(text[i]);
      }
    }
    return this.reverseMachine ? encryptText.reverse().join('') : encryptText.join('');
  }
 
  decrypt(message, key) {
    if (message === undefined || key === undefined	) { throw new Error; }
    let text = message.toUpperCase().split('');
    let keyword = key.toUpperCase().split('');
    let decryptText = [];
    for (let i = 0, j = 0; i < text.length; i++) {
      if (j > keyword.length-1) { j = 0; }
      if (/^[A-Za-z]/.test(text[i])) {
        decryptText.push(this.alphabet[(this.alphabet.indexOf(text[i]) - this.alphabet.indexOf(keyword[j]) + this.alphabet.length) % this.alphabet.length]);
        j++;
      } else {
        decryptText.push(text[i]);
      }
    }
    return this.reverseMachine ? decryptText.reverse().join('') : decryptText.join('');
  }
}

module.exports = VigenereCipheringMachine;
