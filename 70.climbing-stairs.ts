// @leet start
function climbStairs(n: number): number {
  if (n <= 3) return n;
  let [a, b, c] = [1, 2, 3];
  for (let i = 4; i <= n; i++) {
    a = b;
    b = c;
    c = a + b;
  }
  return c;
};
// @leet end
