// @leet start
public class Solution {
    public int[] CountBits(int n) {
      int[] arr = new int[n];
      for(int i=1;i<=n;i++){
        if (i % 2 == 0) {
          arr[i] = arr[i/2];
        }
        else {
          arr[i] = 1 + arr[i-1];
        }
      }
      return arr;
    }
}
// @leet end
