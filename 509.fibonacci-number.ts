// @leet start
function fib(n: number): number {
  if (n <= 1) return n
  let a = 0, b = 1
  for (let i = 2; i <= n; i++) {
    b = a + b
    a = b - a
  }
  return b
};
// @leet end
