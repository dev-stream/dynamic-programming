import "math"

// @leet start
func superEggDrop(k int, n int, dp [][]int) int {
	if k == 1 || n == 0 {
		return n
	}
	if dp[k][n] > 0 {
		return dp[k][n]
	}
	res := math.MaxInt
	for i := 1; i <= n; i++ {
		res = min(res, 1+max(superEggDrop(k-1, i-1, dp), superEggDrop(k, n-i, dp)))
	}
	dp[k][n] = res
	return res
}

func twoEggDrop(n int) int {
	k := 2

	dp := make([][]int, k+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	return superEggDrop(k, n, dp)
}

// @leet end
