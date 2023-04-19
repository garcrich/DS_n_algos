function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const isFirstElement = i === 0;
    const isDuplicate = nums[i] === nums[i - 1];

    if (isFirstElement || !isDuplicate) {
      let low = i + 1;
      let high = nums.length - 1;
      const targetSum = 0 - nums[i];

      while (low < high) {
        const currentSum = nums[low] + nums[high];
        const isTargetSum = currentSum === targetSum;
        const isSumLessThanTarget = currentSum < targetSum;

        if (isTargetSum) {

          result.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;

        } else if (isSumLessThanTarget) {
          low++;
        } else {
          high--;
        }

      }
    }
  }
  return result;
}

export default threeSum;