import ransomNote from './ransomNote';

describe('ransomNote', () => {
  it('should return true if ransom note can be constructed from magazine', () => {
    expect(ransomNote('a', 'b')).toEqual(false);
    expect(ransomNote('aa', 'ab')).toEqual(false);
    expect(ransomNote('aa', 'aab')).toEqual(true);
  });
});