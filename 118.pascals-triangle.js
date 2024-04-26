// @leet start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let pascal = [[1]]
  for (let i = 1; i < numRows; i++) {
    let row = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1)
      }
      else if (i > 1) {
        row.push(pascal[i - 1][j - 1] + pascal[i - 1][j])
      }
    }
    pascal.push(row)
  }
  return pascal
};
// @leet end
