// @leet start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
  var f = new Array(s.length + 1).fill().map(() => new Array(t.length + 1).fill(0));
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        f[i + 1][j + 1] = f[i][j] + 1;
      }
    }
  }
  var g = new Array(s.length + 1).fill().map(() => new Array(t.length + 1).fill(0));
  let res = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = t.length - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        g[i][j] = g[i + 1][j + 1] + 1;
      }
      else {
        res += (f[i][j] + 1) * g[i + 1][j + 1] + 1;
      }
    }
  }
  return res;
};
// @leet end

module.exports = countSubstrings
