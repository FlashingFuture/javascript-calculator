const { validateExpression } = require("./validator.js");

describe("validateExpression", () => {
  test("3 + 2 x 4", () => {
    expect(validateExpression("3 + 2 x 4")).toBe("3+2x4");
  });
  test("3 + + 4", () => {
    expect(() => validateExpression("3 + + 4")).toThrow(
      "연산자의 위치가 올바르지 않습니다. 숫자와 연산자를 번갈아 입력해 주세요."
    );
  });
  test("+ 2 - 4", () => {
    expect(() => validateExpression("3 + + 4")).toThrow(
      "연산자의 위치가 올바르지 않습니다. 숫자와 연산자를 번갈아 입력해 주세요."
    );
  });
  test("t + 3 - 2", () => {
    expect(() => validateExpression("t + 3 - 2")).toThrow(
      "유효하지 않은 문자가 포함되어 있습니다: +, -, x, / 와 숫자만 입력해 주세요."
    );
  });
});
