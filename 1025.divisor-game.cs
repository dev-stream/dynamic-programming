// @leet start
public class Solution {
    public bool DivisorGame(int n) {
      /* return (n % 2 == 0); */
      return ((n & 1) == 0);
      // 01010 == 10
      // 00001 == 1
      // 01010 & 00001 == 0
    }
}
// @leet end
