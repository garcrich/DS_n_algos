function rotate(nums: number[], k: number): void {
    shuffle(nums, 0, nums.length - 1)
    shuffle(nums, 0, k - 1)
    shuffle(nums, k, nums.length - 1)
}

function shuffle(array: number[], startP:number, endP:number) {
  while(startP < endP) {
    [array[startP], array[endP]] = [array[endP], array[startP]]
  }
}

export default rotate;