import diameterOfBinaryTree, {TreeNode} from "./BTdiameter";

describe('diameterOfBinaryTree', () => {
  it('should return the diameter of the tree', () => {
    expect(diameterOfBinaryTree(tree1)).toEqual(4)
    expect(diameterOfBinaryTree(tree2)).toEqual(6)

  })
})

const tree1 = new TreeNode(1);
tree1.right = new TreeNode(2);
tree1.right.left = new TreeNode(3);
tree1.left = new TreeNode(4);
tree1.left.left = new TreeNode(5);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.left.left.left = new TreeNode(8);
tree2.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);
tree2.right.right.right = new TreeNode(9);