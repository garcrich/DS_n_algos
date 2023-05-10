import isSubtree from "./isSubtree";

describe("isSubtree", () => {
  it("should return true if the subtree is found", () => {
    const tree = {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: {
          val: 2,
          left: null,
          right: null
        }
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
    const subtree = {
      val: 4,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    }
    expect(isSubtree(tree, subtree)).toBe(true);
  })

  it("should return false if the subtree is not found", () => {
    const tree = {
      val: 3,
      left: {
        val: 4,
        left: {
          val: 1,
          left: null,
          right: null
        },
        right: {
          val: 2,
          left: null,
          right: null
        }
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
    const subtree = {
      val: 4,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: {
          val: 0,
          left: null,
          right: null
        },
        right: null
      }
    }
    expect(isSubtree(tree, subtree)).toBe(false);
  })
})