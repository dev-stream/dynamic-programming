// @leet start
func maxRepeating(sequence string, word string) int {
  max := 0
  for i := 0; i < len(sequence); i++ {
    if sequence[i] != word[0] { continue }
    if len(sequence[i:]) < len(word) { break }
    count := 0
    j := i
    for sequence[j:j+len(word)] == word {
      count++
      if count > max { max = count }
      j += len(word)
      if len(sequence[j:]) < len(word) { break }
    }
  }
  return max
}
// @leet end
