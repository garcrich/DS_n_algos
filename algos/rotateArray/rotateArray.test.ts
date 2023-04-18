import rotateArray from './rotateArray';
import optimizeRotateArray from './rotateArrayOptimized';


describe('rotateArray', () => {
  it('should rotate array', () => {
    const nums = [1,2,3,4,5,6,7]
    rotateArray(nums, 3)
    expect(nums).toEqual([5,6,7,1,2,3,4])
  })

  it('should rotate array', () => {
    const nums = [-1,-100,3,99]

    rotateArray(nums, 2)
    expect(nums).toEqual([3,99,-1,-100])
  })

  it('should rotate array', () => {
    const nums = [1,2,3,4,5,6]

    rotateArray(nums, 2)
    expect(nums).toEqual([5,6,1,2,3,4])
  })
})

describe('optimizeRotateArray', () => {
  it('should rotate array', () => {
    const nums = [1,2,3,4,5,6,7]
    optimizeRotateArray(nums, 3)
    expect(nums).toEqual([5,6,7,1,2,3,4])
  })

  it('should rotate array', () => {
    const nums = [-1,-100,3,99]

    optimizeRotateArray(nums, 2)
    expect(nums).toEqual([3,99,-1,-100])
  })

  it('should rotate array', () => {
    const nums = [1,2,3,4,5,6]

    optimizeRotateArray(nums, 2)
    expect(nums).toEqual([5,6,1,2,3,4])
  })
})