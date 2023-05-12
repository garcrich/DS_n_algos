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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  let visibleNodes: number[] = []

  let queue: TreeNode[] = [root]

  while(queue.length > 0) {
    let levelSize = queue.length;

    for(let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift()

      if(i === 0)
        visibleNodes.push(currentNode.val)

      if(currentNode.right)
        queue.push(currentNode.right)

      if(currentNode.left)
        queue.push(currentNode.left)
    }
  }

  return visibleNodes
}

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.right = new TreeNode(5)
root.right.right = new TreeNode(4)
root.right.right.right = new TreeNode(6)

rightSideView(root)

export default rightSideView;