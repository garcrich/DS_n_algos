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

function maxDepth(root: TreeNode | null): number {
  const depth: number = 0;
  return depthChecker(root, depth)
}

function depthChecker(node: TreeNode | null, currentDepth: number): number {
  if (node === null) return currentDepth;

  const leftTreeDepth = depthChecker(node.left, currentDepth + 1)
  const rightTreeDepth = depthChecker(node.right, currentDepth + 1)

  return Math.max(leftTreeDepth, rightTreeDepth)
}

export default maxDepth;