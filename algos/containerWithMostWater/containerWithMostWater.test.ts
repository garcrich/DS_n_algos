import containerWithMostWater from './containerWithMostWater'

describe('containerWithMostWater', () => {
  it('should return 49 for [1,8,6,2,5,4,8,3,7]', () => {
    expect(containerWithMostWater([1,8,6,2,5,4,8,3,7])).toBe(49);
  });

  it('should return 1 for [1,1]', () => {
    expect(containerWithMostWater([1,1])).toBe(1);
  });

  it('should return 16 for [4,3,2,1,4]', () => {
    expect(containerWithMostWater([4,3,2,1,4])).toBe(16);
  });

});