// @leet start
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun dfs(n: Int, memo: MutableMap<Int, List<TreeNode?>>): List<TreeNode?> {
      if (memo.containsKey(n)) { return memo[n]!! }
      val res = mutableListOf<TreeNode?>()
      if (n % 2 == 0) {
        memo[n] = res
        return res
      }
      if (n == 1) {
        res.add(TreeNode(0))
      }
      val m = n - 1
      if (memo.containsKey(m)) { return memo[m]!! }
      for (i in 1..m step 2) {
        val left = dfs(i, memo)
        val right = dfs(m - i, memo)
        for (l in left) {
          for (r in right) {
            res.add(TreeNode(0, l, r))
          }
        }
      }
      memo[m] = res
      return res
    }
    fun allPossibleFBT(n: Int): List<TreeNode?> {
      return dfs(n, mutableMapOf())
    }
}
// @leet end
