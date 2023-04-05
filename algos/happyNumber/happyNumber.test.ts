import isHappy from "./happyNumber";

describe("Happy Number", () => {
  it("should return true", () => {
    expect(isHappy(19)).toBe(true);
    expect(isHappy(7)).toBe(true);
    expect(isHappy(1)).toBe(true);
    expect(isHappy(10)).toBe(true);
    expect(isHappy(2)).toBe(false);
    expect(isHappy(3)).toBe(false);
    expect(isHappy(4)).toBe(false);
    expect(isHappy(5)).toBe(false);
  })
})