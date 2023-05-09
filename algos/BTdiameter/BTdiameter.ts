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

function diameterOfBinaryTree(root: TreeNode | null): number {

  let maxDiameter: Record<string,number> = {
    value: 0
  };

  depthChecker(root,maxDiameter);

  return maxDiameter.value;
};

function depthChecker(node: TreeNode | null, maxDiameter: Record<string,number>): number {
  if(!node)
    return 0

  const leftDepth = depthChecker(node.left, maxDiameter)
  const rightDepth = depthChecker(node.right, maxDiameter)

  maxDiameter.value = Math.max(maxDiameter.value, leftDepth + rightDepth)

  return Math.max(leftDepth, rightDepth) + 1
  
}

export default diameterOfBinaryTree