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

function isValidBST(root:TreeNode | null) : boolean {

  return isValidBSTChecker(root)

}


function isValidBSTChecker(node:TreeNode | null, minVal = -Infinity, maxVal = Infinity) : boolean{
  if (!node) 
    return true

  if(node.val <= minVal || node.val >= maxVal) 
    return false

  return isValidBSTChecker(node.left, minVal, node.val) && isValidBSTChecker(node.right, node.val, maxVal)
}




export default isValidBST;