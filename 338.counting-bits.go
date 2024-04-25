// @leet start
func countBits(n int) []int {
  ans := make([]int, n+1)
  offset := 1
  for i := 1; i <= n; i++ {
    if (i == offset*2) { offset *= 2 }
    ans[i] = 1 + ans[i-offset]
  }
  return ans
}
// @leet end
