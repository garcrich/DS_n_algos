function isHappy(n: number): boolean {
  if(n === 1) return true;
  const seen: Set<number> = new Set();
  let isHappy:boolean = false;
  while(n !== 1) {
    const numsSquaredSum = n.toString()
    .split('')
    .reduce((sum, num) => {
      return sum += Math.pow(parseInt(num), 2)
    }, 0)

    if(seen.has(numsSquaredSum)) {
      n = numsSquaredSum;
    }
    else if(numsSquaredSum === 1) {
      isHappy = true;
      break;
    }

    seen.add(numsSquaredSum)
  }

  return isHappy;
}

export default isHappy;
