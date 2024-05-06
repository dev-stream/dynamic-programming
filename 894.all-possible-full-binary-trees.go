// @leet start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func dfs(n int, memo map[int][]*TreeNode) []*TreeNode {
	if v, ok := memo[n]; ok {
		return v
	}
	res := []*TreeNode{}
	if n%2 == 0 {
		memo[n] = res
		return res
	}
	if n == 1 {
		memo[1] = []*TreeNode{{Val: 0}}
		return memo[1]
	}
	n = n - 1
	if v, ok := memo[n]; ok {
		return v
	}
	for i := 1; i < n; i += 2 {
		left := dfs(i, memo)
		right := dfs(n-i, memo)
		for _, l := range left {
			for _, r := range right {
				res = append(res, &TreeNode{Val: 0, Left: l, Right: r})
			}
		}
	}
	memo[n] = res
	return res
}

func allPossibleFBT(n int) []*TreeNode {
	return dfs(n, map[int][]*TreeNode{})
}

// @leet end
