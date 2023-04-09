import moveZeros from "./moveZeroes";

describe("moveZeroes", () => {
  it("should handle an empty array", () => {
    expect(moveZeros([])).toEqual([]);
  });

  it("should handle an array with a single zero", () => {
    expect(moveZeros([0])).toEqual([0]);
  });

  it("should handle an array with a single non-zero element", () => {
    expect(moveZeros([5])).toEqual([5]);
  });

  it("should handle an array with all zeroes", () => {
    expect(moveZeros([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
  });

  it("should handle an array with no zeroes", () => {
    expect(moveZeros([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should move zeroes to the end of the array while maintaining the order of non-zero elements", () => {
    expect(moveZeros([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZeros([1, 2, 0, 1, 3, 0, 4, 4])).toEqual([1, 2, 1, 3, 4, 4, 0, 0]);
  });
});
