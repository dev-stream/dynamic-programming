// @leet start
function getRow(rowIndex: number): number[] {
  let row: number[] = [];
  for (let i = 0; i <= rowIndex; i++) {
    let next: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        next.push(1);
      } else {
        next.push(row[j - 1] + row[j]);
      }
    }
    row = next;
  }
  return row;
};
// @leet end
