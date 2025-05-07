function validateExpression(expression) {
  if (typeof expression !== "string") {
    throw new Error("문자열을 입력해 주세요.");
  }
  let processedExpression = expression.replace(/\s+/g, "");
  if (!/^[0-9+\-x/.]+$/.test(processedExpression)) {
    throw new Error(
      "유효하지 않은 문자가 포함되어 있습니다: +, -, x, / 와 숫자만 입력해 주세요."
    );
  }
  if (
    /^[+\-x/]|[+\-x/]$/.test(processedExpression) ||
    /[+\-x/]{2,}/.test(processedExpression)
  ) {
    throw new Error(
      "연산자의 위치가 올바르지 않습니다. 숫자와 연산자를 번갈아 입력해 주세요."
    );
  }

  return processedExpression;
}

module.exports = { validateExpression };
