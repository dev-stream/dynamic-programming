// @leet start
func getRow(rowIndex int) []int {
  res := []int{1}
  for i := 0; i <= rowIndex; i++ {
    row := make([]int, i+1)
    for j := 0; j <= i; j++ {
      if j == 0 || j == i {
        row[j] = 1
      } else {
        row[j] = res[j-1] + res[j]
      }
    }
    res = row
  }
  return res
}
// @leet end
