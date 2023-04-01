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

function binaryInOrderTreeTraversal(root: TreeNode | null): number[] {
  const traveralPath: number[] = [];
  let currentNode: TreeNode | null = root;
  const stack: TreeNode[] = [];
  
  while(currentNode || stack.length) {
    if(currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      traveralPath.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }

  return traveralPath;
}

export default binaryInOrderTreeTraversal;