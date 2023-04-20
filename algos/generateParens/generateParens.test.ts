import generateParens from './generateParens';


describe('generateParens', () => {
  it('should generate all combinations of valid parentheses', () => {
    expect(generateParens(1)).toEqual(['()']);
    expect(generateParens(2)).toEqual(['(())', '()()']);
    expect(generateParens(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
  });
});