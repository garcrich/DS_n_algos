import isValid from "./matchingBraces";

describe('isValid', () => {
  it('should return true', () => {
    expect(isValid('()')).toEqual(true)
    expect(isValid('{}')).toEqual(true)
    expect(isValid('[]')).toEqual(true)
    expect(isValid('{[()]}')).toEqual(true)
  })

  it('should return false', () => {
    expect(isValid('(}')).toEqual(false)
    expect(isValid('{)')).toEqual(false)
    expect(isValid('[]]')).toEqual(false)
    expect(isValid('{{')).toEqual(false)
  })

})