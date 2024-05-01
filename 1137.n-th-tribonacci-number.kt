// @leet start
class Solution {
    fun tribonacci(n: Int): Int {
      var dp = intArrayOf(0, 1, 1)
      if(n < 3) return dp[n]
      for(i in 3..n) {
        dp = intArrayOf(dp[1], dp[2], dp[0] + dp[1] + dp[2])
      }
      return dp[2]
    }
}
// @leet end
