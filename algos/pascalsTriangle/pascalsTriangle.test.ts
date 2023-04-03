import pascalsTriangle from './pascalsTriangle';

describe('pascalsTriangle', () => {
  it('should return the correct Pascal\'s Triangle', () => {
    expect(pascalsTriangle(0)).toEqual([]);
    expect(pascalsTriangle(1)).toEqual([[1]]);
    expect(pascalsTriangle(2)).toEqual([[1], [1, 1]]);
    expect(pascalsTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    expect(pascalsTriangle(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
    expect(pascalsTriangle(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });
});