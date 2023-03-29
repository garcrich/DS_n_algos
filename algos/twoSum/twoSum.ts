const twoSum = (nums: number[], target: number): number[] => {
    // Create an empty object to store the complements of the numbers in the array
    const complements: {[key: number]: number} = Object.create(null);
  
    // Loop through the array of numbers
    for (let [i, num] of nums.entries()) {
      // Calculate the complement of the current number
      const complement = target - num;
      
      // If the complement is in the complements object, return the indices of the two numbers
      if (complement in complements) {
        return [complements[complement], i];
      }
  
      // Otherwise, add the current number to the complements object with its index as the value
      complements[num] = i;
    }
  
    // Return an empty array if no solution is found
    return [];
  }

  export default twoSum;