function pascalTriangleRow(rowIndex: number): number[] {
  let pascalTriangleRow = [1];

  for (let i = 1; i <= rowIndex; i++) {
    let prevValue = pascalTriangleRow[0];
    for (let j = 1; j <= i; j++) {
      let temp = pascalTriangleRow[j];
      pascalTriangleRow[j] = prevValue + pascalTriangleRow[j];
      prevValue = temp;
    }
    pascalTriangleRow.push(1);
  }

  return pascalTriangleRow;
}

export default pascalTriangleRow;
