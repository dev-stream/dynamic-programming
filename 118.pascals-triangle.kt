// @leet start
class Solution {
    fun generate(numRows: Int): List<List<Int>> {
      val result = mutableListOf<List<Int>>()
      for (i in 1..numRows) {
        val row = mutableListOf<Int>()
        for (j in 1..i) {
          if (j == 1 || j == i) { row.add(1) }
          else if (i > 2) {
            row.add(result[i - 2][j - 2] + result[i - 2][j - 1])
          }
        }
        result.add(row)
      }
      return result
    }
}
// @leet end
