import mergedTwoArrays from './mergeTwoArrays';

describe('mergeTwoArrays', () => {
  it('should merge two sorted arrays', () => {
    expect(mergedTwoArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
    expect(mergedTwoArrays([1], 1, [], 0)).toEqual([1]);
  });
});