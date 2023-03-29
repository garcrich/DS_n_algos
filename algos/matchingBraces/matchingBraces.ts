function isValid(s: string): boolean {
  const braceMap = {
      '}': '{',
      ']': '[',
      ')': '('
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let curChar = s[i];
    if (curChar === '{' || curChar === '[' || curChar === '(') {
        stack.push(curChar);
    } else {
        if (stack.length === 0 || braceMap[curChar] !== stack.pop()) {
            return false;
        }
    }
  }

  return stack.length === 0;
};

export default isValid;