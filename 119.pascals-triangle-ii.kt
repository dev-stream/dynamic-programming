// @leet start
class Solution {
    fun getRow(rowIndex: Int): List<Int> {
      var row = mutableListOf<Int>()
      for (i in 0..rowIndex) {
        var next = mutableListOf<Int>()
        for (j in 0..i) {
          if (j == 0 || j == i) {
            next.add(1)
          } else {
            next.add(row[j] + row[j - 1])
          }
        }
        row = next
      }
      return row
    }
}
// @leet end
