const { isOperator, tokenize } = require("./tokenizer.js");

describe("isOperator Test", () => {
  test("+ 테스트", () => {
    expect(isOperator("+")).toBe(true);
  });
  test("- 테스트", () => {
    expect(isOperator("-")).toBe(true);
  });
  test("x 테스트", () => {
    expect(isOperator("x")).toBe(true);
  });
  test("/ 테스트", () => {
    expect(isOperator("/")).toBe(true);
  });
  test("ㄱ 테스트", () => {
    expect(isOperator("ㄱ")).toBe(false);
  });
});

describe("tokenize Test", () => {
  test("3+2x4", () => {
    expect(tokenize("3+2x4")).toEqual([3, "+", 2, "x", 4]);
  });
  test("3s5", () => {
    expect(() => tokenize("3s5")).toThrow("잘못된 입력값이 있습니다.");
  });
  test("3+2.45", () => {
    expect(tokenize("3+2.45")).toEqual([3, "+", 2.45]);
  });
});
