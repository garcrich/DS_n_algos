function canConstruct(ransomNote: string, magazine: string): boolean {
  let charMap: Record<string,number> = {}
  let canUseMag = true;
  for(let i = 0; i < magazine.length; i++) {
      let curChar = magazine[i]
      charMap[curChar] = charMap[curChar] ? charMap[curChar] + 1 : 1
  }

  for(let i = 0; i < ransomNote.length; i++) {
      let curChar = ransomNote[i]
      if(!(curChar in charMap) || charMap[curChar] === 0) {
          canUseMag =  false
          break;
      }
      charMap[curChar]--
  }

  return canUseMag;
};

export default canConstruct;