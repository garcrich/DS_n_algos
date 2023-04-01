import climbStairs from "./climbStairs"

describe("climbStairs", () => {
  it("should return the number of ways to climb n stairs", () => {
    expect(climbStairs(2)).toBe(2)
    expect(climbStairs(3)).toBe(3)
    expect(climbStairs(4)).toBe(5)
    expect(climbStairs(5)).toBe(8)
    expect(climbStairs(6)).toBe(13)
    expect(climbStairs(7)).toBe(21)
  })
})