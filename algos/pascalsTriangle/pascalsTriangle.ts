const generate = (numRows: number): number[][] => {
  const pascalsTriangle: number[][] = [];

  for(let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1)
    row[0] = 1
    row[i] = 1

    for(let j = 1; j < i; j++) {
      row[j] = pascalsTriangle[i - 1][j - 1] + 
               pascalsTriangle[i - 1][j]
    }

    pascalsTriangle.push(row)
  }

  return pascalsTriangle;
}


export default generate;