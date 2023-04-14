import invertTree, { TreeNode } from "./invertBT";

describe("invertTree", () => {
  it("should return the inverted tree", () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);

    const inverted = invertTree(root);

    expect(inverted.val).toEqual(4);
    expect(inverted.left.val).toEqual(7);
    expect(inverted.right.val).toEqual(2);
    expect(inverted.left.left.val).toEqual(9);
    expect(inverted.left.right.val).toEqual(6);
    expect(inverted.right.left.val).toEqual(3);
    expect(inverted.right.right.val).toEqual(1);
  });
})