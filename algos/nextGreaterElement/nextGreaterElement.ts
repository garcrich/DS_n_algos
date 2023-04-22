function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const decreasingStack: number[] = [];
  const nextGreaterElementMap: Record<number, number> = {};

  // Iterate through nums2 to find the next greater element for each value
  for (let i = 0; i < nums2.length; i++) {
      // If the current element is greater than the element at the top of the stack,
      // it is the next greater element for that value
      while (decreasingStack.length && nums2[i] > decreasingStack[decreasingStack.length - 1]) {
          const poppedValue = decreasingStack.pop();
          nextGreaterElementMap[poppedValue] = nums2[i];
      }
      // Push the current element onto the stack to find its next greater element later
      decreasingStack.push(nums2[i]);
  }

  // For each element in nums1, find its next greater element in nums2 using the map
  return nums1.map((num) => nextGreaterElementMap.hasOwnProperty(num) ? nextGreaterElementMap[num] : -1);
}


export default nextGreaterElement;