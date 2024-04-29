// @leet start
public class Solution {
    public IList<int> GetRow(int rowIndex) {
      var res = new List<int>();
      for (var i = 0; i <= rowIndex; i++) {
        var next = new List<int>();
        for (var j = 0; j <= i; j++) {
          if (j == 0 || j == i) {
            next.Add(1);
          } else {
            next.Add(res[j - 1] + res[j]);
          }
        }
        res = next;
      }
      return res;
    }
}
// @leet end
