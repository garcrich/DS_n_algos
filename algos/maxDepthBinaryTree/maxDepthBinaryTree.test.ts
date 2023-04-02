import maxDepth, { TreeNode } from './maxDepthBinaryTree';

const symmetricTree = new TreeNode(1);
symmetricTree.left = new TreeNode(2);
symmetricTree.right = new TreeNode(2);
symmetricTree.left.left = new TreeNode(3);
symmetricTree.left.right = new TreeNode(4);
symmetricTree.right.left = new TreeNode(4);
symmetricTree.right.right = new TreeNode(3);

const nonSymmetricTree = new TreeNode(1);
nonSymmetricTree.left = new TreeNode(2);
nonSymmetricTree.right = new TreeNode(2);
nonSymmetricTree.left.right = new TreeNode(3);
nonSymmetricTree.right.right = new TreeNode(3);
nonSymmetricTree.right.right.right = new TreeNode(5);

describe('maxDepth', () => {
  it('should return the max depth of a binary tree', () => {
    expect(maxDepth(null)).toBe(0);
    expect(maxDepth(new TreeNode(1))).toBe(1);
    expect(maxDepth(symmetricTree)).toBe(3);
    expect(maxDepth(nonSymmetricTree)).toBe(4);
  })
})