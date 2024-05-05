// @leet start
public class Solution {
    public int MaxRepeating(string sequence, string word) {
      var max = 0;
      for(int i = 0; i < sequence.Length; i++) {
        if (i + word.Length > sequence.Length) break;
        var count = 0;
        var j = i;
        while(sequence.Substring(j, word.Length) == word) {
          count++;
          j += word.Length;
          if (j + word.Length > sequence.Length) break;
        }
        if (count > max) max = count;
      }
      return max;
    }
}
// @leet end
