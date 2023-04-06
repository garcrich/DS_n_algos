import excelColNum from './excelColNum';

describe('excelColNum', () => {
  it('should return the correct column number', () => {
    expect(excelColNum('A')).toEqual(1)
    expect(excelColNum('AB')).toEqual(28)
    expect(excelColNum('ZY')).toEqual(701)
    expect(excelColNum('FXSHRXW')).toEqual(2147483647)
    expect(excelColNum('FXSHRXV')).toEqual(2147483646)
    expect(excelColNum('B')).toEqual(2)
  })
})