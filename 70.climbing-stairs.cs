// @leet start
public class Solution {
    public int ClimbStairs(int n) {
      if(n == 1) return 1;
      var a = 1;
      var b = 2;
      for(int i = 3; i <= n; i++) {
        b = a + b;
        a = b - a;
      }
      return b;
    }
}
// @leet end
