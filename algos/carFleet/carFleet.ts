function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position
    .map((position, i) => ({ position, speed: speed[i] }))
    .sort((a, b) => b.position - a.position)

  let timeToDesition:number[] = cars
    .map(({ position, speed }) => (target - position) / speed)

  let stack:number[] = []

  for(const time of timeToDesition) {
    if(stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time)
    }
  }

  return stack.length;
}

export default carFleet;