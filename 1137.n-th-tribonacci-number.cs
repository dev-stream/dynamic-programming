// @leet start
public class Solution {
    public int Tribonacci(int n) {
      var dp = new int[3]{0,1,1};
      if(n<3) return dp[n];
      for(int i = 3; i<=n; i++){
        dp = new int[3]{dp[1], dp[2], dp[0]+dp[1]+dp[2]};
      }
      return dp[2];
    }
}
// @leet end
