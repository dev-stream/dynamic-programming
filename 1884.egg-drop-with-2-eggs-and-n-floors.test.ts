import { describe, expect, test } from '@jest/globals';
let twoEggDrop = require('./1884.egg-drop-with-2-eggs-and-n-floors')

describe('1884', () => {
  test('1884.egg-drop-with-2-eggs-and-n-floors', () => {

    expect(twoEggDrop(1)).toBe(1);   // 1
    expect(twoEggDrop(2)).toBe(2);   // 2
    expect(twoEggDrop(4)).toBe(3);   // 3
    expect(twoEggDrop(7)).toBe(4);   // 4
    expect(twoEggDrop(11)).toBe(5);  // 5
    expect(twoEggDrop(16)).toBe(6);  // 6
    expect(twoEggDrop(22)).toBe(7);  // 7
    expect(twoEggDrop(29)).toBe(8);  // 8
    expect(twoEggDrop(37)).toBe(9);  // 9
    expect(twoEggDrop(46)).toBe(10); // 10
    expect(twoEggDrop(56)).toBe(11); // 11
    expect(twoEggDrop(67)).toBe(12); // 12
    expect(twoEggDrop(79)).toBe(13); // 13
    expect(twoEggDrop(92)).toBe(14); // 14
    expect(twoEggDrop(106)).toBe(15); // 15

    expect(twoEggDrop(100)).toBe(14);
  });
});
