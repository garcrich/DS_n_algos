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

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = []
  const stack: TreeNode[] = []

  if (root) {
    stack.push(root)
  }

  while(stack.length > 0) {
    const node:TreeNode = stack.pop()
    result.push(node.val)

    if(node.right) {
      stack.push(node.right)
    }

    if (node.left) {
      stack.push(node.left)
    }
  }
  return result;
};
export default preorderTraversal;