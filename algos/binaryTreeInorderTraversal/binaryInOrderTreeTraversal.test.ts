import binaryInOrderTreeTraversal, {TreeNode} from "./binaryInOrderTreeTraversal";

describe('binaryInOrderTreeTraversal', () => {
  it('should return an array of values in order', () => {
    expect(binaryInOrderTreeTraversal(tree1)).toEqual([1,3,2])
    expect(binaryInOrderTreeTraversal(tree2)).toEqual([3,2,4,1,6,5])
    expect(binaryInOrderTreeTraversal(null)).toEqual([])
    expect(binaryInOrderTreeTraversal(new TreeNode(1))).toEqual([1])
    expect(binaryInOrderTreeTraversal(new TreeNode(1, new TreeNode(2)))).toEqual([2,1])
  })
});

const tree1 = new TreeNode(1);
tree1.right = new TreeNode(2);
tree1.right.left = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.right = new TreeNode(4);
tree2.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);