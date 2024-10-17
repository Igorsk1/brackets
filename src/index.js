 module.exports = function check(str, bracketsConfig) {
	let brackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets.push(bracketsConfig[i].join(""));
  }

  for (let i = 0; i < brackets.length; i++) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], "");
      i = -1;
    }

    if (str === "") return true;
  }

  return false;
};
