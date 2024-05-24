// @leet start
function countSubstrings(s: string, t: string): number {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] !== t[j]) {
        ans++;
        let l = 1;
        let q = 1;
        while (i - l >= 0 && j - l >= 0 && s[i - l] === t[j - l]) {
          ans++;
          l++;
          q++;
        }
        let r = 1;
        while (i + r < s.length && j + r < t.length && s[i + r] === t[j + r]) {
          ans += q;
          r++;
        }
      }
    }
  }
  return ans;
};
// @leet end

module.exports = countSubstrings
