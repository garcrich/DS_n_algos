function combinationSum(candidates: number[], target: number) {
  let res: number[][] = [];

  let path: number[] = [];

  function dfs(start: number, target: number) {
    if (target == 0) {
      res.push([...path])
      return
    }

    for(let i = start; i < candidates.length; i++) {
      if (target - candidates[i] >= 0) {
        path.push(candidates[i])
        dfs(i, target - candidates[i])
        path.pop()
      }
    }
  }

  dfs(0, target)
  return res;

}

export default combinationSum;