// @leet start
public class Solution {
    public int MaxProfit(int[] prices) {
      var min = prices[0];
      var max = 0;
      for (int i = 1; i < prices.Length; i++) {
        if (prices[i] < min) {
          min = prices[i];
        }
        if (prices[i] - min > max) {
          max = prices[i] - min;
        }
      }
      return max;
    }
}
// @leet end
