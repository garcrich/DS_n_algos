function romanToInterger(s: string): number {
  let convertedNum: number = null;

  const romanNumMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  const romanSubtract = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900
  }

  for(let i = 0; i < s.length; i++) {
      let lookAhead:string = s[i] + s[i + 1] 

      if(lookAhead in romanSubtract) {
          convertedNum += romanSubtract[lookAhead]
          i++;
          continue;
      }

      convertedNum += romanNumMap[s[i]]
  }

  return convertedNum;
};
romanToInterger('MCMXCIV')
export default romanToInterger;