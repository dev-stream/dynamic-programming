// @leet start
function countBits(n: number): number[] {
  let result: number[] = new Array(n + 1).fill(0)
  let offset = 1
  for (let i = 1; i <= n; i++) {
    if (i === offset * 2) { offset *= 2 }
    result[i] = 1 + result[i - offset]
  }
  return result
};
// @leet end
