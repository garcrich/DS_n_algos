export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function hasPathSum(root, targetSum) {
  if (!root) return false;
  return pathTraversal(root, 0, targetSum);
}

function pathTraversal(node, runningSum, targetSum) {
  if (!node) return false;

  runningSum = runningSum + node.val;
  
  // If the current node is a leaf and the running sum equals targetSum, return true
  if (!node.left && !node.right && 
      runningSum === targetSum
  ) {
      return true;
  }

  // Return true if either left or right subtree has a path that matches targetSum
  return pathTraversal(node.left, runningSum, targetSum) || 
      pathTraversal(node.right, runningSum, targetSum);
}


export default hasPathSum;