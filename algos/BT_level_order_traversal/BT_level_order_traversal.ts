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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let nodesToVisit: (TreeNode | null)[] = [root];
  let nodeValuesByLevel: number[][] = []; 

  while(nodesToVisit.length > 0) {
      let valuesAtCurrentLevel: number[] = [];
      nodesToVisit = visitNodesAtCurrentLevel(nodesToVisit, valuesAtCurrentLevel);
      nodeValuesByLevel.push(valuesAtCurrentLevel);
  }

  return nodeValuesByLevel;
}

function visitNodesAtCurrentLevel(nodesToVisit: TreeNode[], valuesAtCurrentLevel: number[]): TreeNode[] {
  let numberOfNodesAtCurrentLevel = nodesToVisit.length;
  let nextNodesToVisit: TreeNode[] = [];

  for (let i = 0; i < numberOfNodesAtCurrentLevel; i++) {
      let currentNode = nodesToVisit[i];
      valuesAtCurrentLevel.push(currentNode.val);

      if(currentNode.left) nextNodesToVisit.push(currentNode.left);
      if(currentNode.right) nextNodesToVisit.push(currentNode.right);
  }

  return nextNodesToVisit;
}

export default levelOrder;