function majorityElement(nums: number[]): number {
  const numTracker: Record<number,number> = {};
  const majorityThreshhold:number = Math.floor(nums.length / 2);
  let majorityElement:number = null;

  for(let i = 0; i < nums.length; i++) {
    numTracker[nums[i]] = numTracker[nums[i]] ? numTracker[nums[i]] + 1 : 1;
    if (numTracker[nums[i]] > majorityThreshhold) {
      majorityElement = nums[i];
      break;
    }
  }

  return majorityElement; 
};

export default majorityElement;