function singleNumber(nums) {
  nums.sort((a, b) => a - b)

  for(let i:number = 0; i < nums.length; i += 2) {
    if(nums[i] !== nums[i + 1]) return nums[i]
  }
  throw new Error("No single number found")
}


export default singleNumber;