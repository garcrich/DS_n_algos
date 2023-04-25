function longestConsecutive(nums: number[]): number {
  const numSet: Set<number> = new Set(nums);
  let maxSequenceLength: number = 0;

  for(const num of nums) {
    if(!numSet.has(num - 1)) {
      let currentSequenceLength = 1;
      while(numSet.has(num + currentSequenceLength)) {
        currentSequenceLength++
      }
      maxSequenceLength = Math.max(maxSequenceLength, currentSequenceLength)
    }
  }

  return maxSequenceLength;
}

export default longestConsecutive;