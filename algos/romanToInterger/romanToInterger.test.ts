import romanToInterger from './romanToInterger';

describe('romanToInterger', () => {
  it('should return the integer', () => {
    expect(romanToInterger('III')).toEqual(3)
  })
  it('should return the integer', () => {
    expect(romanToInterger('IV')).toEqual(4)
  })
  it('should return the integer', () => {
    expect(romanToInterger('IX')).toEqual(9)
  })
  it('should return the integer', () => {
    expect(romanToInterger('LVIII')).toEqual(58)
  })
  it('should return the integer', () => {
    expect(romanToInterger('MCMXCIV')).toEqual(1994)
  })
});