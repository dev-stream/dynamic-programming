// @leet start
function maxRepeating(sequence: string, word: string): number {
  let max = 0;
  for (let i = 0; i < sequence.length; i++) {
    let count = 0;
    let j = i;
    while (sequence.substring(j).indexOf(word) === 0) {
      count++;
      if (j + word.length > sequence.length) break;
      j += word.length;
    }
    if (count > max) max = count;
  }
  return max;
};
// @leet end
