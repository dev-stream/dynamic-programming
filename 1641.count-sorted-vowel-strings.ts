// @leet start
function countVowelStrings(n: number): number {
  let dp = [1, 1, 1, 1, 1];
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 5; j++) {
      let sum = 0;
      for (let k = j; k < 5; k++) {
        sum += dp[k];
      }
      dp[j] = sum;
    }
  }
  return dp[0];
};
// @leet end
