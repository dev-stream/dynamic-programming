// @leet start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
  return dfs(n, {});
};
var dfs = (n, m) => {
  if (m[n]) return m[n];
  let res = [];
  if (n === 1) {
    res.push(new TreeNode());
  }
  n -= 1;
  if (m[n]) return m[n];
  for (let i = 1; i < n; i += 2) {
    let left = m[i] ? m[i] : dfs(i, m);
    let right = m[n - i] ? m[n - i] : dfs(n - i, m);
    for (let j = 0; j < left.length; j++) {
      for (let k = 0; k < right.length; k++) {
        res.push(new TreeNode(0, left[j], right[k]));
      }
    }
  }
  m[n] = res;
  return res;
};
// @leet end
