function missingNumber(nums: number[]): number {
  let missingNumber: number;
  const numMap: Record<number, boolean> = {}

  for(let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = true
  }

  for(let i = 0; i < nums.length + 1; i++) {
    if(!numMap[i]) {
      missingNumber = i
      break
    }
  }

  return missingNumber;
};

export default missingNumber;