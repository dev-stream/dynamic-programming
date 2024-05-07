// @leet start
public class Solution {
    public int CountVowelStrings(int n) {
      var dp = new int[]{1, 1, 1, 1, 1};
      for (int i = 1; i <= n; i++) {
        for (int j = 0; j < 5; j++) {
          var sum = 0;
          for (int k = j; k < 5; k++) {
            sum += dp[k];
          }
          dp[j] = sum;
        }
      }
      return dp[0];
    }
}
// @leet end
