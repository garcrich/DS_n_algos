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

  let diameter: number = 0;

  const depthChecker = (node: TreeNode | null): number => {
    if (!node) return 0;

    const leftDepth = depthChecker(node.left)
    const rightDepth = depthChecker(node.right)

    diameter = Math.max(diameter, leftDepth + rightDepth)

    return Math.max(leftDepth, rightDepth) + 1

  }
  depthChecker(root);

  return diameter;
};

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.right = new TreeNode(4);

tree2.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);

diameterOfBinaryTree(tree2)


export default diameterOfBinaryTree