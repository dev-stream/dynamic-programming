// @leet start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
  let dfs = function(i, m) {
    if (m[i]) return m[i];
    if (i === arr.length) return 0;
    let res = 0
    let max = 0
    for (let j = i; j < Math.min(i + k, arr.length); j++) {
      max = Math.max(max, arr[j])
      res = Math.max(res, max * (j - i + 1) + dfs(j + 1, m))
    }
    return m[i] = res
  }
  return dfs(0, {})
};
// @leet end

module.exports = maxSumAfterPartitioning
