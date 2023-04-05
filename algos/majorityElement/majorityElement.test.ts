import majorityElement from "./majorityElement";
import majorityElementOptimized from "./majorityElementOptimized";


describe('majorityElement', () => {
  it('should return 3', () => {
    expect(majorityElement([3,2,3])).toBe(3)
    expect(majorityElementOptimized([3,2,3])).toBe(3)
    expect(majorityElement([2,2,1,1,1,2,2])).toBe(2)
    expect(majorityElementOptimized([2,2,1,1,1,2,2])).toBe(2)
    expect(majorityElement([1,2,3,4,5])).toBe(null)
    expect(majorityElementOptimized([1,2,3,4,5])).toBe(null)
    expect(majorityElement([1])).toBe(1)
    expect(majorityElementOptimized([1])).toBe(1)
  })
})