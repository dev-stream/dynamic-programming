// @leet start
function twoEggDrop(n: number): number {
  let k = 0;
  for (let i = 1; i <= n;) {
    k += 1
    i = i + k
  }
  // for (let i = n; i > 0;) {
  //   k += 1;
  //   i = i - k;
  // }
  return k;
};
// @leet end

//  9, 22, 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99, 100
// 14, 13, 12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,   1

module.exports = twoEggDrop
