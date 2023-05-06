import search from "./search_in_rotated_sorted_array";

describe("search", () => {
  it("should return 4 for nums = [4,5,6,7,0,1,2], target = 0", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  })

  it('should return -1 for nums = [4,5,6,7,0,1,2], target = 3', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  })

  it('should return -1 for nums = [1], target = 0', () => {
    expect(search([1], 0)).toEqual(-1);
  })

  it('should return 1 for nums = [6,0,1,2,3,4,5]', () => {
    expect(search([6,0,1,2,3,4,5], 6)).toEqual(0)
  })
});