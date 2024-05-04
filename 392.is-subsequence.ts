// @leet start
function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true;
  let j = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) j++;
    if (j === s.length) return true;
  }
  return false;
};
// @leet end
