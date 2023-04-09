import binarySearch from "./binarySearch";

describe("binarySearch", () => {
  it("should return index of target", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 5;
    const expected = 4;

    const result = binarySearch(arr, target);

    expect(result).toEqual(expected);
  });

  it("should return -1 if target is not found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 11;
    const expected = -1;

    const result = binarySearch(arr, target);

    expect(result).toEqual(expected);
  });

  it("should return -1 if target is not found", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 0;
    const expected = -1;

    const result = binarySearch(arr, target);

    expect(result).toEqual(expected);
  });

  it("should return target if found", () => {
    const arr = [1,2,3,];

    const target = 2;
    const expected = 1;
    const result = binarySearch(arr, target);
    expect(result).toEqual(expected);
  })
})