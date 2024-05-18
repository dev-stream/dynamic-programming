// @leet start
function rec_countSquares(matrix: number[][], row: number, col: number, size: number): number {
  if (row + size > matrix.length) {
    return 0
  }
  if (col + size > matrix[0].length) {
    return 0
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[row + i][col + j] === 0) {
        return 0;
      }
    }
  }
  return 1 + rec_countSquares(matrix, row, col, size + 1);
}
function countSquares(matrix: number[][]): number {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        res += 1 + rec_countSquares(matrix, i, j, 2);
      }
    }
  }
  return res;
};
// @leet end

module.exports = countSquares

//  Accepted 🎉
//
//
// 󰓅 Runtime
//
// 	│ 69 ms
// 	│ Beats 100.00% of users with  TypeScript
//
//
// 󰍛 Memory
//
// 	│ 54.5 MB
// 	│ Beats 100.00% of users with  TypeScript
//
//
//  More challenges
//
// 	│ 󱓻 2087. Minimum Cost Homecoming of a Robot in a Grid
// 	│ 󱓻 2088. Count Fertile Pyramids in a Land

