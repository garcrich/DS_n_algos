import isSymmetric, {TreeNode} from "./symmetricTree";

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

describe("isSymmetric", () => {

  test('Emypty tree', () => {
    expect(isSymmetric(null)).toBe(true)
  })

  test('Single node tree', () => {
    expect(isSymmetric(new TreeNode(1))).toBe(true)
  })

  test('Symmetric tree', () => {
    expect(isSymmetric(symmetricTree)).toBe(true)
  })

  test('Non-symmetric tree', () => {
    expect(isSymmetric(nonSymmetricTree)).toBe(false)
  })

})