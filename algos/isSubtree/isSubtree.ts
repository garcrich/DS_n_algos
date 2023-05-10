class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.left = (left === undefined ? null : left)
      this.right = (right === undefined ? null : right)
  }
}



function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) return false;

  // Check if the current subtree rooted at 'root' is the same as 'subRoot'
  if (areTreesIdentical(root, subRoot)) {
      return true;
  }

  // Recursively traverse the main tree, checking for a matching subtree
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function areTreesIdentical(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base cases
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  // If the nodes have the same value, check if their subtrees are also identical
  if (p.val === q.val) {
      return areTreesIdentical(p.left, q.left) && areTreesIdentical(p.right, q.right);
  }

  return false;
}

export default isSubtree