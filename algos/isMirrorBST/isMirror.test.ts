import isSymmetric, { TreeNode } from "./isMirrorBST";

describe("isSymmetric", () => {
  it("should return true if the tree is symmetric", () => {
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3),
        new TreeNode(4)
      ),
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(3)
      )
    );

    const result = isSymmetric(root);
    expect(result).toBe(true)
  })

  it("should return false if the tree is not symmetric", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(5))
    );

    const result = isSymmetric(root);

    expect(result).toBe(false);
  })


});