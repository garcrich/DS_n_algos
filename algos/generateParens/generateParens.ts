function generateParenthesis(n: number): string[] {
  const result = [];

  backtrack("", 0, 0, n, result);

  return result
};

function backtrack(current, openCount, closeCount,n, result) {
  if (current.length === 2 * n) {
      result.push(current)
      return;
  }

  if(openCount < n) {
      backtrack(current + "(", openCount + 1, closeCount, n, result);
  }

  if (closeCount < openCount) {
      backtrack(current + ")", openCount, closeCount + 1, n, result);
  }
}

export default generateParenthesis;