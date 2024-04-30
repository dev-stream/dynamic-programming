// @leet start
function getLongestSubsequence(words: string[], groups: number[]): string[] {
  let res: string[] = [words[0]];
  let j = 0;
  for (let i = 1; i < words.length; i++) {
    if (groups[i] !== groups[j]) {
      j = i;
      res.push(words[j]);
    }
  }
  return res;
};
