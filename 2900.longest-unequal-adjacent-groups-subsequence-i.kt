// @leet start
class Solution {
    fun getLongestSubsequence(words: Array<String>, groups: IntArray): List<String> {
      var r = mutableListOf<String>()
      var j = 0
      r.add(words[j])
      for (i in groups.indices) {
        if (groups[i] != groups[j]) {
          j = i
          r.add(words[j])
        }
      }
      return r
    }
}
// @leet end
