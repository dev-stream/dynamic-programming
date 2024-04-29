// @leet start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [];
  for (let i = 0; i <= rowIndex; i++) {
    let prev = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        prev.push(1)
      } else {
        prev.push(row[j - 1] + row[j])
      }
    }
    row = prev
  }
  return row
};
// @leet end
