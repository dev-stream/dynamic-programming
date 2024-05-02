// @leet start
class Solution {
    fun maxProfit(prices: IntArray): Int {
      var min = prices[0]
      var max = 0
      for (i in prices.indices) {
        if (prices[i] < min) {
          min = prices[i]
        }
        if (prices[i] - min > max) {
          max = prices[i] - min
        }
      }
      return max
    }
}
// @leet end
