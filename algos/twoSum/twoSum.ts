const twoSum = (nums: number[], target: number): number[] => {
  const complements: {[key: number]: number} = Object.create(null);
  for (let [i, num] of nums.entries()) {
    const complement = target - num;
    if (complement in complements) {
      return [complements[complement], i];
    }
    complements[num] = i;
  }
  return [];
};

export default twoSum;
