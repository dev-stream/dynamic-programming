// @leet start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1;
  let res = [1, 2];
  for (let i = 2; i < n; i++) {
    res[1] = res[0] + res[1];
    res[0] = res[1] - res[0];
  }
  return res[1];
};
// @leet end
