// @leet start
class Solution {
    fun countBits(n: Int): IntArray {
      val ans = IntArray(n+1)
      var offset = 1
      for (i in 1..n) {
        if (i == offset * 2) offset *= 2
        ans[i] = ans[i - offset] + 1
      }
      return ans
    }
}
// @leet end
