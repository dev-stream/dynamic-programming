// @leet start
func countSubstrings(s string, t string) int {
	f := make([][]int, len(s)+1)
	for i := 0; i < len(f); i++ {
		f[i] = make([]int, len(t)+1)
	}
	for i := 0; i < len(s); i++ {
		for j := 0; j < len(t); j++ {
			if s[i] == t[j] {
				f[i+1][j+1] = f[i][j] + 1
			}
		}
	}
	g := make([][]int, len(s)+1)
	for i := 0; i < len(g); i++ {
		g[i] = make([]int, len(t)+1)
	}
	res := 0
	for i := len(s) - 1; i >= 0; i-- {
		for j := len(t) - 1; j >= 0; j-- {
			if s[i] == t[j] {
				g[i][j] = g[i+1][j+1] + 1
			} else {
				res += (f[i][j] + 1) * (g[i+1][j+1] + 1)
			}
		}
	}
	return res
}

// @leet end
