function rotate(nums: number[], k: number): void {
    while (k > 0) {
        const lastElement = nums.pop()
        nums.unshift(lastElement);
        k--;
    }
}

export default rotate;