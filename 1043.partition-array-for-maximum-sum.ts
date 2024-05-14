// @leet start
function maxSumAfterPartitioning(arr: number[], k: number): number {
  let cache = new Map();
  let dfs = (i: number): number => {
    if (cache.has(i)) return cache.get(i)!;
    let max = 0;
    let res = 0;
    for (let j = i; j < Math.min(i + k, arr.length); j++) {
      max = Math.max(max, arr[j]);
      let size = j - i + 1;
      res = Math.max(res, max * size + dfs(j + 1));
    }
    cache.set(i, res);
    return res;
  }

  return dfs(0);
};
// @leet end

module.exports = maxSumAfterPartitioning

// depth first search
// [1] -> [1] + [15] -> [1] + [15] + [7]
// [1] -> [1] + [15] -> [1] + [15] + [7] .. [5] [10] [0]
// [1] -> [1] + [15] -> [1] + [15] + [7] .. [10, 10] [0]
