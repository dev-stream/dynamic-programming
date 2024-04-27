// @leet start
public class Solution {
    private Dictionary<int, int> memory = new Dictionary<int, int>();
    public int Fib(int n) {
      if (n < 2) return n;
      if (memory.ContainsKey(n)) return memory[n];
      memory[n] = Fib(n-1) + Fib(n-2);
      return memory[n];
    }
}
// @leet end
