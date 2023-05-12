import BT_rightSideView, { TreeNode } from './BT_rightSideView';


describe('BT_rightSideView', () => {
  it('should return the right side view of a binary tree', () => {
    let root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.right = new TreeNode(5)
    root.right.right = new TreeNode(4)

    expect(BT_rightSideView(root)).toEqual([1, 3, 4])
  })

  it('should return the right side view of a binary tree', () => {
    let root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.right = new TreeNode(5)
    root.right.right = new TreeNode(4)
    root.right.right.right = new TreeNode(6)

    expect(BT_rightSideView(root)).toEqual([1, 3, 4, 6])
  })
})