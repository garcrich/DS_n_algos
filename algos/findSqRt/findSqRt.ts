function findSqRt(x: number): number {
  if (x <= 1) return x

  let lowerBound = 0
  let upperBound = Math.floor(x / 2)
  let sqrt = 0

  while(lowerBound <= upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);

    if (mid * mid <= x) {
      sqrt = mid
      lowerBound = mid + 1
    } else 
      upperBound = mid - 1
  }

  return sqrt
}

export default findSqRt;