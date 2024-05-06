// @leet start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    private IList<TreeNode> Helper(int n, Dictionary<int, IList<TreeNode>> memo) {
      if (memo.ContainsKey(n)) return memo[n];
      
      var res = new List<TreeNode>();
      if (n % 2 == 0) return res;
      if (n == 1) {
        res.Add(new TreeNode(0));
      }
      n = n - 1;
      if (memo.ContainsKey(n)) return memo[n];
      for (int i = 1; i < n; i+=2) {
        var left = memo.ContainsKey(i) ? memo[i] : Helper(i, memo);
        var right = memo.ContainsKey(n - i) ? memo[n - i] : Helper(n - i, memo);
        for (var l = 0; l < left.Count; l++) {
          for (var r = 0; r < right.Count; r++) {
            var root = new TreeNode(0, left[l], right[r]);
            res.Add(root);
          }
        }
      }

      memo.Add(n, res);
      return res;

    }

    public IList<TreeNode> AllPossibleFBT(int n) {
      return Helper(n, new Dictionary<int, IList<TreeNode>>());
    }
}
// @leet end
