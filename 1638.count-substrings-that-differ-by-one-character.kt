// @leet start
class Solution {
    fun countSubstrings(s: String, t: String): Int {
      var f = Array(s.length + 1) { IntArray(t.length + 1) }
      for (i in s.indices) {
        for (j in t.indices) {
          if (s[i] == t[j]) {
            f[i + 1][j + 1] = f[i][j] + 1
          }
        }
      }
      var g = Array(s.length + 1) { IntArray(t.length + 1) }
      var ans = 0
      for (i in s.length - 1 downTo 0) {
        for (j in t.length - 1 downTo 0) {
          if (s[i] == t[j]) {
            g[i][j] = g[i + 1][j + 1] + 1
          }
          else {
            ans += (f[i][j] + 1) * (g[i + 1][j + 1] + 1)
          }
        }
      }
      return ans
        
    }
}
// @leet end
