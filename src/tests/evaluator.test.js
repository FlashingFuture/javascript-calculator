import { evaluateTokens } from "../core/evaluator.js";

describe("evaluateTokens Test", () => {
  test("[]", () => {
    expect(() => evaluateTokens([])).toThrow("토큰이 비어있습니다.");
  });
  test("[2, +, -, +, 2]", () => {
    expect(() => evaluateTokens([2, "+", "-", "+", 2])).toThrow(
      "토큰 형식이 올바르지 않습니다: 짝수 인덱스는 숫자여야 합니다."
    );
  });
  test("[2, 3, 4]", () => {
    expect(() => evaluateTokens([2, 3, 4])).toThrow(
      "토큰 형식이 올바르지 않습니다: 홀수 인덱스는 연산자여야 합니다."
    );
  });
  test("[3.5, '+'', 4, 'x', 16]", () => {
    expect(evaluateTokens([3.5, "+", 4, "x", 16])).toBe(67.5);
  });
});
