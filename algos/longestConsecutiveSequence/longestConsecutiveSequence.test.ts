import longestConsecutiveSequence from './longestConsecutiveSequence';

describe('longestConsecutiveSequence', () => {
  it('should return 4 for [100, 4, 200, 1, 3, 2]', () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it('should return 2 for [0, 1]', () => {
    expect(longestConsecutiveSequence([0, 1])).toBe(2);
  });

  it('should return 1 for [1]', () => {
    expect(longestConsecutiveSequence([1])).toBe(1);
  });
  
});