import isValidST, { TreeNode } from './IsValidBSTChecker';


describe('isValidBSTChecker', () => {
  it('should return true if the tree is a valid BST', () => {
    let root = new TreeNode(2)
    root.left = new TreeNode(1)
    root.right = new TreeNode(3)

    expect(isValidST(root)).toEqual(true)
  })

  it('should return false if the tree is not a valid BST', () => {
    let root = new TreeNode(5)
    root.left = new TreeNode(1)
    root.right = new TreeNode(4)
    root.right.left = new TreeNode(3)
    root.right.right = new TreeNode(6)

    expect(isValidST(root)).toEqual(false)
  })
})