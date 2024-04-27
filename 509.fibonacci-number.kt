// @leet start
class Solution {
    fun fib(n: Int): Int {
      fun fib(n: Int, memo: IntArray): Int {
        if (n < 2) return n
        if (memo[n] != 0) return memo[n]
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
        return memo[n]
      }
      return fib(n, IntArray(n + 1))
    }
}
// @leet end
