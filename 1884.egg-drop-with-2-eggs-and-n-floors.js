// @leet start
/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  for (let x = 1; x <= n; x++) {
    if (x * (x + 1) / 2 >= n) return x;
  }
  return 0;
};
// @leet end

module.exports = twoEggDrop

//  9, 22, 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99, 100
// 14, 13, 12, 11, 10,  9,  8,  7,  6,  5,  4,  3,  2,   1
//
// **
// *
//  *
// **
//
// 14 * 15 / 2 = 210 / 2 = 105
// 13 * 14 / 2 = 182 / 2 = 91 
// 12 * 13 / 2 = 156 / 2 = 78
// 11 * 12 / 2 = 132 / 2 = 66
// 10 * 11 / 2 = 110 / 2 = 55
// 9 * 10/ 2 = 45
// 8 * 9 / 2 = 36
// 7 * 8 / 2 = 28
// 6 * 7 / 2 = 21
// 5 * 6 / 2 = 15
// 4 * 5 / 2 = 10
// 3 * 4 / 2 = 6
// 2 * 3 / 2 = 3
// 1 * 2 / 2 = 1
//
// x(x + 1) / 2>= n
