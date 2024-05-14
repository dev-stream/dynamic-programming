// @leet start
func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func dfs(arr []int, k int, i int, memo []int) int {
	if memo[i] > 0 {
		return memo[i]
	}
	max := 0
	res := 0
	for j := i; j < i+k && j < len(arr); j++ {
		max = maxInt(max, arr[j])
		res = maxInt(res, max*(j-i+1)+dfs(arr, k, j+1, memo))
	}
	memo[i] = res
	return res
}

func maxSumAfterPartitioning(arr []int, k int) int {
	return dfs(arr, k, 0, make([]int, len(arr)+1))
}

// @leet end
