// @leet start
function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};
// @leet end
