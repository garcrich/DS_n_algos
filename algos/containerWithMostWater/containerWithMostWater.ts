function containerWithMostWater(height: number[]): number {
  
  let leftP = 0
  let rightP = height.length - 1
  let maxWater = 0
  while(leftP < rightP) {
    let  currentwidth = rightP - leftP
    let currentHeight = Math.min(height[leftP], height[rightP])
    let currentMaxWater = currentHeight * currentwidth
    maxWater = Math.max(maxWater, currentMaxWater)
    
    if(height[leftP] < height[rightP]) {
      leftP++
    } else {
      rightP--
    }
  }

  return maxWater
}

export default containerWithMostWater;