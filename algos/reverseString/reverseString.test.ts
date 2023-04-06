import reverseString from "./reverseString";

describe("reverseString", () => {
  it("should reverse a string", () => {
    expect(reverseString(["h", "e", "l", "l", "o"])).toEqual(["o", "l", "l", "e", "h"])
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual(["h", "a", "n", "n", "a", "H"])
    expect(reverseString(["a", "b", "c", "d"])).toEqual(["d", "c", "b", "a"])
    expect(reverseString(["a"])).toEqual(["a"])
    expect(reverseString(["a", "b"])).toEqual(["b", "a"])
  })
})