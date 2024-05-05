// @leet start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let max = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (i + word.length > sequence.length) break;
    let count = 0;
    let j = i;
    while (sequence.substring(j).startsWith(word)) {
      j += word.length;
      count++;
      if (count > max) max = count;
      if (j + word.length > sequence.length) break;
    }
  }
  return max;
};
// @leet end
