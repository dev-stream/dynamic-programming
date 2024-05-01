// @leet start
function tribonacci(n: number): number {
  let arr = [0, 1, 1];
  if (n < 3) return arr[n];
  for (let i = 3; i <= n; i++) {
    arr = [arr[1], arr[2], arr[0] + arr[1] + arr[2]];
  }
  return arr[2];
};
// @leet end
