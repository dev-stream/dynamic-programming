// @leet start
public class Solution {
    public IList<string> GenerateParenthesis(int n) {
      var res = new List<string>();
      Action<int,int,string> backtrack = null;
      backtrack = (left, right, cur) => {
        if (left == n && right == n) res.Add(cur);
        if (left < n) backtrack(left + 1, right, cur + "(");
        if (right < left) backtrack(left, right + 1, cur + ")");
      };
      backtrack(0, 0, "");
      return res;
    }
}
// @leet end
