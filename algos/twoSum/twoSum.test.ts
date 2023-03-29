import twoSum from './twoSum';
import twoSumSorting from './twoSumSorting'

describe('twoSum modules', () => {
  it('return indices of the two numbers such that they add up to target.', () => {
    expect(twoSum([2,7,11,15], 17)).toEqual([0,3])
  })

  it('return indices of the two numbers such that they add up to target.', () => {
    expect(twoSumSorting([2,7,11,15], 17)).toEqual([0,3])
  })
  
})