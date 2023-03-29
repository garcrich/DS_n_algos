const twoSumSort = (nums: number[], target: number): number[] => {
    const sortedNums = [...nums].sort((a,b) => a - b);

    let left = 0;
    let right = sortedNums.length - 1;

    while (left < right) {
        const sum = sortedNums[left] + sortedNums[right]
        if (sum === target) {
            return [nums.indexOf(sortedNums[left]), nums.indexOf(sortedNums[right])];
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}

export default twoSumSort;
twoSumSort([2,7,11,15], 17);