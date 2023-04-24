function isValididSudoku(board: string[][]): boolean {
  const isValid9x9: Record<number, boolean>[] = Array.from({ length: 9 }, () => ({}));
  const isValidRow: Record<number, boolean>[] = Array.from({ length: 9 }, () => ({}));
  const isValidColumn: Record<number, boolean>[] = Array.from({ length: 9 }, () => ({}));

  for(let rowIdx = 0; rowIdx < board.length; rowIdx++) {
    for(let colIdx = 0; colIdx < board[rowIdx].length; colIdx++) {
      const currentCell = board[rowIdx][colIdx];

      if(currentCell === '.') continue;

      if(isValidRow[rowIdx][currentCell]) {
        return false;
      } else {
        isValidRow[rowIdx][currentCell] = true;
      }

      if(isValidColumn[colIdx][currentCell]) {
        return false;
      } else {
        isValidColumn[colIdx][currentCell] = true;
      }

      const boxIdx = Math.floor(rowIdx / 3) * 3 + Math.floor(colIdx / 3);

      if(isValid9x9[boxIdx][currentCell]) {
        return false;
      } else {
        isValid9x9[boxIdx][currentCell] = true;
      }
    }
  }

  return true
}

export default isValididSudoku;