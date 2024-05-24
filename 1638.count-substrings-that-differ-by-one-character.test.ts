import { describe, expect, test } from '@jest/globals';
let countSubstrings = require('./1638.count-substrings-that-differ-by-one-character')

describe('1638', () => {
  test('1638.count-substrings-that-differ-by-one-character', () => {
    expect(countSubstrings("a", "a")).toBe(0);
    expect(countSubstrings("ab", "bb")).toBe(3);
    expect(countSubstrings("abe", "bbc")).toBe(10);
    expect(countSubstrings("aba", "baba")).toBe(6);
    expect(countSubstrings("ab", "bb")).toBe(3);
  });
});
