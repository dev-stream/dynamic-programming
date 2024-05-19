// @leet start
class Solution {
    fun backtrack(res: MutableList<String>, cur: String, left: Int, right: Int) {
      if (left == 0 && right == 0) res.add(cur)
      if (left > 0) backtrack(res, "$cur(", left - 1, right)
      if (right > left) backtrack(res, "$cur)", left, right - 1)
    }

    fun generateParenthesis(n: Int): List<String> {
      var res = mutableListOf<String>()
      backtrack(res, "", n, n)
      return res
    }
}
// @leet end
