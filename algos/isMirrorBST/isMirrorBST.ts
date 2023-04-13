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
function isSymmetric(root: TreeNode | null): boolean {
  if(!root) return true

  return isMirror(root.left, root.right)
};

function isMirror(left:TreeNode, right: TreeNode):boolean {
  if(left == null && right === null) 
      return true

  if(left === null || right === null) 
      return false

  const isCurrentValSymmetric = left.val === right.val
  const leftBool: boolean = isMirror(left.left, right.right)
  const rightBool: boolean = isMirror(left.right, left.right)

   return  isCurrentValSymmetric && leftBool && rightBool
}

export default isSymmetric;