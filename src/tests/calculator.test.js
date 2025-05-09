import { calculate } from "../core/calculator";

describe("calculate Test", () => {
  test("3 + 5 x 2.4", () => {
    expect(calculate("3 + 5 x 2.4")).toBe(15);
  });
});
