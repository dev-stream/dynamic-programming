// @leet start
func recursiveGenerateParenthesis(left, right int, path string, res *[]string) {
	if left == 0 && right == 0 {
		*res = append(*res, path)
	}
	if left > 0 {
		recursiveGenerateParenthesis(left-1, right, path+"(", res)
	}
	if right > left {
		recursiveGenerateParenthesis(left, right-1, path+")", res)
	}
}

func generateParenthesis(n int) []string {
	res := []string{}
	recursiveGenerateParenthesis(n, n, "", &res)
	return res
}

// @leet end
