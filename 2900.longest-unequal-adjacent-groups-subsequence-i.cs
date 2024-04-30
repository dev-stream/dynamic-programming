// @leet start
public class Solution {
    public IList<string> GetLongestSubsequence(string[] words, int[] groups) {
      var j = 0;
      var res = new List<string>(){words[j]};
      for(int i = 1; i < words.Length; i++){
        if(groups[j] != groups[i]){
          j = i;
          res.Add(words[j]);
        }
      }
      return res;
    }
}
// @leet end
