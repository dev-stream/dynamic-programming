// @leet start
public class Solution {
    int[] dp;
    int Solve(int n, int k) {
      if (n == 0 || k == 0) {
        return 0;
      }
      if (k == 1) {
        return n;
      }
      if (dp[n] != 0) {
        return dp[n];
      }

      var min = n;
      for (int i = 1; i <= n; i++) {
        min = Math.Min(min, 1 + Math.Max(Solve(i - 1, k - 1), Solve(n - i, k)));
      }
      dp[n] = min;

      return dp[n];
    }
    public int TwoEggDrop(int n) {
      dp  = new int[n+1];
      return Solve(n, 2);
    }
}
// @leet end
//
// x,k
//    |   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |   |   |   |   |
//    | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |   |   |   |   |
//    | 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |   |   |   |   |
//    | 2 | 0 | 1 | 2 | 2 | 3 | 3 | 3 | 4 |   |   |   |   |
//    | 3 | 0 |   |   |   |   |   |   |   |   |   |   |   |
//
//
