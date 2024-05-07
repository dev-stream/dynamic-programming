// @leet start
class Solution {
    fun countVowelStrings(n: Int): Int {
      var res = IntArray(5){1}
      for(i in 1..n) {
        for(j in 0..4) {
          var acc = 0
          for(k in j..4) {
            acc += res[k]
          }
          res[j] = acc
        }
      }
      return res[0]
    }
}
// @leet end
