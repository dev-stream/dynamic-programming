// @leet start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  let backtrack = (open, close, s) => {
    if (open === n && close === n) {
      res.push(s);
    }
    if (open < n) {
      backtrack(open + 1, close, s + "(");
    }
    if (close < open) {
      backtrack(open, close + 1, s + ")");
    }
  }
  backtrack(0, 0, "");
  return res;
};
// @leet end
