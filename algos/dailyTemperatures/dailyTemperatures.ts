function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = new Array(temperatures.length).fill(0)

  for(let i = 0; i < temperatures.length; i++) {

      while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
          const prevIndex = stack.pop()
          const days = i - prevIndex
          result[prevIndex] = days
      }

      stack.push(i)

  }

  return result
};


export default dailyTemperatures;