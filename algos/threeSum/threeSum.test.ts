import threeSum from "./threeSum";

describe("threeSum", () => {
  it("should return an array of arrays", () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });

  it("should return an array of arrays", () => {
    const result = threeSum([]);
    expect(result).toEqual([]);
  });

  it("should return an array of arrays", () => {
    const result = threeSum([0]);
    expect(result).toEqual([]);
  });
  it("should return an array of arrays", () => {
    const result = threeSum([0, 0, 0]);
    expect(result).toEqual([[0, 0, 0]]);
  });
});