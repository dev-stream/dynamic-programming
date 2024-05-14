// @leet start
class Solution {
    fun maxSumAfterPartitioning(arr: IntArray, k: Int): Int {
      val cache = IntArray(arr.size + 1)
      fun dfs(i: Int): Int {
        if (cache[i] != 0) return cache[i]
        var max = 0
        var res = 0
        for (j in i until minOf(i + k, arr.size)) {
          max = maxOf(max, arr[j])
          res = maxOf(res, dfs(j + 1) + max * (j - i + 1))
        }
        cache[i] = res
        return res
      }
      return dfs(0)
    }
}
// @leet end
