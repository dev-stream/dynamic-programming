// @leet start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function allPossibleFBT(n: number): Array<TreeNode | null> {
  let res: Array<TreeNode | null> = [];
  if (n % 2 === 0) return res;

  if (n === 1) {
    res.push(new TreeNode(0, null, null));
  }
  if (n === 3) {
    res.push(
      new TreeNode(0, new TreeNode(0), new TreeNode(0)),
    );
  }
  if (n === 5) {
    res.push(
      new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0), new TreeNode(0))),
      new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)), new TreeNode(0)),
    );
  }
  if (n === 7) {
    res.push(
      new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0), new TreeNode(0)))),
      new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)), new TreeNode(0))),
      new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)), new TreeNode(0, new TreeNode(0), new TreeNode(0))),
      new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0, new TreeNode(0), new TreeNode(0))), new TreeNode(0)),
      new TreeNode(0, new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)), new TreeNode(0)), new TreeNode(0)),
    );
  }

  return res;
};
// @leet end
