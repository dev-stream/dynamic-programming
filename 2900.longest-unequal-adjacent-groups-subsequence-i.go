// @leet start
func getLongestSubsequence(words []string, groups []int) []string {
  j := 0
  res := []string{words[j]}
  for i := 1; i < len(groups); i++ {
    if groups[i] != groups[j] {
      j = i
      res = append(res, words[j])
    }
  }
  return res
}
// @leet end
