// @leet start
public class Solution {
    public int MaxSumAfterPartitioning(int[] arr, int k) {
      var cache = new int[arr.Length + 1];
      Func<int, int> dfs = null;
      dfs = (i) => {
        if (cache[i] > 0) return cache[i];
        var max = 0;
        var res = 0;
        for (var j = i; j < Math.Min(i + k, arr.Length); j++) {
          max = Math.Max(max, arr[j]);
          res = Math.Max(res, max * (j - i + 1) + dfs(j + 1));
        }
        cache[i] = res;
        return res;
      };

      return dfs(0);
    }
}
// @leet end
