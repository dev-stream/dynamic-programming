// @leet start
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
  let j = 0
  let res = [words[j]]
  for (let i = 0; i < groups.length; ++i) {
    if (groups[i] !== groups[j]) {
      j = i
      res.push(words[j])
    }
  }
  return res
};
// @leet end
