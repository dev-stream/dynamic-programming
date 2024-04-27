// @leet start
func fib(n int) int {
  if n < 2 { return n }
  m := make([]int, 2)
  m[0], m[1] = 0, 1
  for i := 2; i <= n; i++ {
    r := m[0] + m[1]
    m[0], m[1] = m[1], r
  }
  return m[1]
}
// @leet end
