function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false
  let isValidAnagram: boolean = true;
  let charMap: Record<string,number> = {};

  for(let i = 0; i < s.length; i++) {
    if(!charMap[s[i]])
      charMap[s[i]] = 1
    else
      charMap[s[i]] += 1
  }

  for(let i = 0; i < t.length; i++) {
    if(!charMap[t[i]]) {
      isValidAnagram = false
      break
    } else
      charMap[t[i]] -= 1

    if(charMap[t[i]] < 0) {
      isValidAnagram = false
      break
    }
  }
   
  return isValidAnagram
};

export default isAnagram;