import { describe, expect, test } from '@jest/globals';
let countSquares = require('./1277.count-square-submatrices-with-all-ones')

describe('1277', () => {
  test('1277.count-square-submatrices-with-all-ones', () => {
    expect(countSquares([
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 1]
    ])).toBe(15);
    expect(countSquares([
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0]
    ])).toBe(7);
  });
});
