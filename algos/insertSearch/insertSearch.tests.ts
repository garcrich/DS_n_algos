import searchInsert from "./insertSearch";

describe("searchInsert", () => {
  it("should return the index of the target", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
    expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  });
});