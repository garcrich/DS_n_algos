import singleNumber from "./SingleNumber";

describe("SingleNumber", () => {
  it("should return 1", () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    expect(singleNumber([1])).toBe(1)
    expect(singleNumber([1, 1, 2, 2, 3, 3, 4, 5, 5])).toBe(4)
    expect(singleNumber([-1,-1,99,99,2,2,5,6,6])).toBe(5)
  })
})