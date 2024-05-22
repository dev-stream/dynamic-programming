// @leet start
class Solution {
    fun twoEggDrop(n: Int, k: Int, dp: Array<IntArray>): Int {
      if (n == 0 || k == 0) {
        return 0
      }
      if (k == 1) {
        return n
      }
      if (dp[k][n] != 0) {
        return dp[k][n]
      }

      dp[k][n] = n
      for (i in 1..n) {
        dp[k][n] = Math.min(dp[k][n], 1 + max(twoEggDrop(i - 1, k - 1, dp), twoEggDrop(n - i, k, dp)))
      }

      return dp[k][n]
    }
    fun twoEggDrop(n: Int): Int {
      // k eggs
      var k = 2
      // two dimentional dp
      var dp = Array(k + 1) { IntArray(n + 1) }
      return twoEggDrop(n, k, dp)
    }
}
// @leet end
