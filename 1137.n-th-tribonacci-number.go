// @leet start
func tribonacci(n int) int {
  res := []int{0,1,1}
  if n < 3 { return res[n] }
  for i := 3; i <= n; i++ {
    res = []int{res[1], res[2], res[0] + res[1] + res[2]}
  }
  return res[2]
}
// @leet end
