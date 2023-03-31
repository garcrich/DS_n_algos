import findSqRt from "./findSqRt";

describe("findSqRt", () => {
  it("should return the square root of a number", () => {
    expect(findSqRt(4)).toBe(2);
    expect(findSqRt(9)).toBe(3);
    expect(findSqRt(16)).toBe(4);
    expect(findSqRt(25)).toBe(5);
    expect(findSqRt(1)).toBe(1);
    expect(findSqRt(0)).toBe(0);
  })

})