function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {

    let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid;
      }

      // If middle element is less than or equal to the rightmost element, it means the right part is sorted
      if (nums[mid] <= nums[right]) {

          // Check if the target lies between mid and right elements
          if (target > nums[mid] && target <= nums[right]) {
              // If yes, update the left pointer to search in the right part
              left = mid + 1;
          } else {
              // If not, update the right pointer to search in the left part
              right = mid - 1;
          }
      } else { // If middle element is greater than the rightmost element, it means the left part is sorted
          
        // Check if the target lies between left and mid elements
          if (target >= nums[left] && target < nums[mid]) {
              // If yes, update the right pointer to search in the left part
              right = mid - 1;
          } else {
              // If not, update the left pointer to search in the right part
              left = mid + 1;
          }
      }
  }

  // If the loop ends and target is not found, return -1
  return -1;
};

export default search;