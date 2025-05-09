import { performOperation } from "./operators.js";

export function calculateHighPriority(tokens) {
  const result = [];
  result.push(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = tokens[i + 1];
    if (operator === "x" || operator === "/") {
      const prevNumber = result.pop();
      const calculatedValue = performOperation(
        prevNumber,
        operator,
        nextNumber
      );
      result.push(calculatedValue);
    } else {
      result.push(operator);
      result.push(nextNumber);
    }
  }

  return result;
}

export function calculateLowPriority(tokens) {
  let result = tokens[0];
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const nextNumber = tokens[i + 1];
    result = performOperation(result, operator, nextNumber);
  }

  return result;
}

export function evaluateTokens(tokens) {
  if (tokens.length === 0) {
    throw new Error("토큰이 비어있습니다.");
  }
  for (let i = 0; i < tokens.length; i++) {
    if (i % 2 === 0 && typeof tokens[i] !== "number") {
      throw new Error(
        "토큰 형식이 올바르지 않습니다: 짝수 인덱스는 숫자여야 합니다."
      );
    }
    if (i % 2 === 1 && typeof tokens[i] !== "string") {
      throw new Error(
        "토큰 형식이 올바르지 않습니다: 홀수 인덱스는 연산자여야 합니다."
      );
    }
  }

  const highPriorityResult = calculateHighPriority(tokens);
  return calculateLowPriority(highPriorityResult);
}
