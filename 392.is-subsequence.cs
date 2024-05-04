// @leet start
public class Solution {
    public bool IsSubsequence(string s, string t) {
      if(s.Length == 0) return true;
      var j = 0;
      for(int i = 0; i < t.Length; i++) {
        if(s[j] == t[i]) j++;
        if(j == s.Length) return true;
      }
      return false;
    }
}
// @leet end
