const climbStairs = (n: number): number => {
  if (n <= 2) {
    return n;
  }

  let waysToReachOneStepBefore = 2;
  let waysToReachTwoStepsBefore = 1;
  let currentStepWays = 0;

  for (let step = 3; step <= n; step++) {
    currentStepWays = waysToReachTwoStepsBefore + waysToReachOneStepBefore;
    waysToReachTwoStepsBefore = waysToReachOneStepBefore;
    waysToReachOneStepBefore = currentStepWays;
  }

  return currentStepWays;
}

climbStairs(2);
climbStairs(3);
climbStairs(4);
climbStairs(5);

export default climbStairs;