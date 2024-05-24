// @leet start
public class Solution {
    public int CountSubstrings(string s, string t) {
      var f = new int[s.Length + 1, t.Length + 1];
      for (int i = 0; i < s.Length; i++) {
        for (int j = 0; j < t.Length; j++) {
          if (s[i] == t[j]) {
            f[i + 1, j + 1] = f[i, j] + 1;
          }
        }
      }
      var g = new int[s.Length + 1, t.Length + 1];
      var res = 0;
      for (int i = s.Length - 1; i >= 0; i--) {
        for (int j = t.Length - 1; j >= 0; j--) {
          if (s[i] == t[j]) {
            g[i, j] = g[i + 1, j + 1] + 1;
          }
          else {
            res += (f[i, j] + 1) * (g[i + 1, j + 1] + 1);
          }
        }
      }
      return res;
    }
}
// @leet end
