// @leet start
func maxProfit(prices []int) int {
  min := prices[0]
  max := 0
  for i := 1; i < len(prices); i++ {
    if prices[i] < min {
      min = prices[i]
    }
    if prices[i] - min > max {
      max = prices[i] - min
    }
  }
  return max
}
// @leet end
