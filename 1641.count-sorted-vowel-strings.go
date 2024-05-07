// @leet start
func countVowelStrings(n int) int {
	res := []int{1, 1, 1, 1, 1}
	for i := 1; i <= n; i++ {
		for j := 0; j < 5; j++ {
			acc := 0
			for k := j; k < 5; k++ {
				acc += res[k]
			}
			res[j] = acc
		}
	}
	return res[0]
}
// @leet end
