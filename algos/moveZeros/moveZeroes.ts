 function moveZeroes(nums: number[]): number[] {
   let currZeroIndex = 0;
 
   for (let i = 0; i < nums.length; i++) {
     if (nums[i] !== 0) {
       // Swap nums[i] with nums[currZeroIndex] if they are different
       if (i !== currZeroIndex) {
         nums[currZeroIndex] = nums[i];
         nums[i] = 0;
       }
       currZeroIndex++;
     }
   }
   return nums;
}
 
moveZeroes([0, 1, 0, 3, 12]);

 export default moveZeroes;