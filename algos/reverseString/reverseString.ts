function reverseString(s: string[]): string[] {
  let leftP = 0
  let rightP = s.length - 1

  while(leftP < rightP) {
      [s[leftP],s[rightP]] = [s[rightP], s[leftP]]
      leftP++
      rightP--
  }
  return s
};

export default reverseString;