// @leet start
class Solution {
    fun climbStairs(n: Int): Int {
      if (n <= 2) return n
      var a = 1
      var b = 2
      for (i in 3..n) {
        b = a + b
        a = b - a
      }
      return b
    }
}
// @leet end
