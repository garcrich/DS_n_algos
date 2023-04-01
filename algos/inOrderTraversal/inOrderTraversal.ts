export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const inOrderTraversal = (root: TreeNode  | null): number[] => {
  const stack: TreeNode[] = []

  const traversalPath: number[] = []
  let currentNode: TreeNode | null = root

  while(currentNode || stack.length) {
    if(currentNode) {
      stack.push(currentNode)
      currentNode = currentNode.left
    } else {
      currentNode = stack.pop()!
      traversalPath.push(currentNode.val)
      currentNode = currentNode.right
    }
  }

  return traversalPath;
}

export default inOrderTraversal;