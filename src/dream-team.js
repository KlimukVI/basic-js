const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false;}
  return members.map((item) => typeof(item) != 'string' ? '' : item.replace(/[^A-Za-z]/g, '').slice(0,1).toUpperCase()).sort().join('');
};
