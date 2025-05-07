function tokenize(expression) {
  const tokens = [];
  let currentNumber = "";
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (isDigit(char) || char === ".") {
      currentNumber += char;
    } else if (isOperator(char)) {
      if (currentNumber !== "") {
        tokens.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      tokens.push(char);
    } else {
      throw new Error("잘못된 입력값이 있습니다.");
    }
  }
  if (currentNumber) {
    tokens.push(parseFloat(currentNumber));
  }
  return tokens;
}

function isDigit(char) {
  return /[0-9]/.test(char);
}

function isOperator(char) {
  return "+-x/".includes(char);
}

module.exports = { tokenize, isDigit, isOperator };
