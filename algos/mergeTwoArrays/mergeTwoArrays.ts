function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let nums1Pointer = m - 1;
  let nums2Pointer = n - 1;
  let mergedPointer = m + n - 1;

  while(nums1Pointer >= 0 && nums2Pointer >= 0) {
      if(nums1[nums1Pointer] > nums2[nums2Pointer]) {
          nums1[mergedPointer] = nums1[nums1Pointer]
          nums1Pointer--
      } else {
          nums1[mergedPointer] = nums2[nums2Pointer]
          nums2Pointer--
      }

      mergedPointer--
  }

  while(nums2Pointer >= 0) {
      nums1[mergedPointer] = nums2[nums2Pointer]
      nums2Pointer--
      mergedPointer--
  }

  return nums1;
};

export default merge;