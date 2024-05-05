// @leet start
class Solution {
    fun maxRepeating(sequence: String, word: String): Int {
      var max = 0
      for (i in sequence.indices) {
        if (sequence[i] != word[0]) continue
        if (i + word.length > sequence.length) break
        var j = i
        var count = 0
        while (sequence.substring(j, j + word.length) == word) {
          count++
          if (count > max) max = count
          j += word.length
          if (j + word.length > sequence.length) break
        }
      }
      return max
    }
}
// @leet end
