function majorityElement(nums: number[]): number {
  let majorityElement:number = null;
  const majorityThreshhold:number = nums.length / 2;
  const numTracker: {[key:number]: number} = nums.reduce((map, num) => {
    map[num] = map[num] ? map[num] + 1 : 1;
    return map;
  },{})

  for (let key in numTracker) {
    if (numTracker[key] > majorityThreshhold) {
      majorityElement = parseInt(key);
      break;
    }
  }

  return majorityElement;

};

export default majorityElement;