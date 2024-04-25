// @leet start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let ans = new Array(n + 1).fill(0)
  let offset = 1
  for (let i = 1; i <= n; i++) {
    if (i === offset * 2) offset *= 2
    ans[i] = 1 + ans[i - offset]
  }
  return ans
};
// @leet end
