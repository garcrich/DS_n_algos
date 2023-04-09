import powerOfThree from "./powerOfThree";

describe("powerOfThree", () => {
  it("should return true if n is a power of three", () => {
    expect(powerOfThree(27)).toEqual(true)
    expect(powerOfThree(9)).toEqual(true)
    expect(powerOfThree(3)).toEqual(true)
  })
  it("should return false if n is not a power of three", () => {
    expect(powerOfThree(0)).toEqual(false)
    expect(powerOfThree(45)).toEqual(false)
    expect(powerOfThree(2)).toEqual(false)
  })
})