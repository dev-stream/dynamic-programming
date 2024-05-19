// @leet start
function generateParenthesis(n: number): string[] {
  let res: string[] = [];
  let backtrack = (open: number, close: number, s: string) => {
    if (open === n && close === n) res.push(s)
    if (open < n) backtrack(open + 1, close, s + "(")
    if (close < open) backtrack(open, close + 1, s + ")")
  }
  backtrack(0, 0, "")
  return res;
};
// @leet end
