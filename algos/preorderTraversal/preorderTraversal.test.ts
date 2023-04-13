import preorderTraversal, {TreeNode} from './preorderTraversal';

describe('preorderTraversal', () => {
  it('should return an array of numbers', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const result = preorderTraversal(root);
    expect(result).toEqual([1, 2, 3]);
  });
});