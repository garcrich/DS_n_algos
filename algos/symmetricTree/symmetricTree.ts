export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  return areSubtreesSymmetric(root.left, root.right)
}

function areSubtreesSymmetric(leftNode: TreeNode | null, rightNode: TreeNode | null) {
  if(leftNode === null && rightNode === null) return true;
  if(leftNode === null || rightNode === null) return false;
  if(leftNode.val !== rightNode.val) return false;

  return areSubtreesSymmetric(leftNode.left, rightNode.right) && 
         areSubtreesSymmetric(leftNode.right, rightNode.left)
}

export default isSymmetric;