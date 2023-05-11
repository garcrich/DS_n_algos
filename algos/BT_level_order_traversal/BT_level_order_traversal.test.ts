import levelOrder, { TreeNode } from "./BT_level_order_traversal";

describe("Binary Tree Level Order Traversal", () => {
  it("should return an empty array if the root is null", () => {
    expect(levelOrder(null)).toEqual([]);
  })
  it("should return an array of arrays of node values, where each array represents a level of the tree", () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]);
  })
});