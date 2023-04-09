function firstUniqChar(s: string): number {
  type CharCountMap = Record<string,{count: number, idx: number}>

  const charCountMap: CharCountMap = {}
  let firstUniqueIdx = Infinity

  for(let i = 0; i < s.length; i++) {
      let currChar = s[i]
      if(!charCountMap[currChar]) {
          charCountMap[currChar] = {
              count: 1,
              idx: i
          }
      } else {
          charCountMap[currChar].count++
      }
  }

  for(let char in charCountMap) {
      if(charCountMap[char].count === 1) {
          firstUniqueIdx = charCountMap[char].idx < firstUniqueIdx ? 
              charCountMap[char].idx : firstUniqueIdx
      }
  }

  if(firstUniqueIdx === Infinity) return -1

  return firstUniqueIdx

};

export default firstUniqChar;