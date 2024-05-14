import { describe, expect, test } from '@jest/globals';
let maxSumAfterPartitioning = require('./1043.partition-array-for-maximum-sum')

describe('1043', () => {
  test('1043.partition-array-for-maximum-sum.ts', () => {
    expect(maxSumAfterPartitioning([1, 15, 7, 9, 2, 5, 10], 3)).toBe(84);
    expect(maxSumAfterPartitioning([1, 2, 3], 2)).toBe(7);
    expect(maxSumAfterPartitioning([3, 2, 1], 2)).toBe(7);
    expect(maxSumAfterPartitioning([1, 2, 3], 1)).toBe(6);
    expect(maxSumAfterPartitioning([3, 2, 1], 1)).toBe(6);
  });
});

//
// k = 1
// [1] -> [1]
//
// k = 1
// [1,2] -> [1,3]
//
// k = 2
// [1,2] -> [2,4]
//
// k = 2
// [1,2,3] -> [1] 
// [1,2,3] -> [2,4] 
// [1,2,3] -> [2,5,8] -> [2,3,3]
//
// k = 2
// [3,2,1] -> [3] 
// [3,2,1] -> [3,6] 
// [3,2,1] -> [3,6,8] -> [3,3,2]
//
