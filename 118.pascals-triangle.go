// @leet start
func generate(numRows int) [][]int {
  res := make([][]int, numRows)
  for i := 0; i < numRows; i++ {
    for j := 0; j <= i; j++ {
      if j == 0 || j == i {
        res[i] = append(res[i], 1)
      } else if i > 1 {
        res[i] = append(res[i], res[i-1][j-1]+res[i-1][j])
      }
    }
  }
  return res
}
// @leet end
