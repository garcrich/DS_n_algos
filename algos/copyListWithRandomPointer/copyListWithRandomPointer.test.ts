import copyRandomList from "./copyListWithRandomPointer";

describe("copyRandomList", () => {
  it("should return a deep copy of the list", () => {
    const node1 = { val: 1, next: null, random: null };
    const node2 = { val: 2, next: null, random: null };
    const node3 = { val: 3, next: null, random: null };
    const node4 = { val: 4, next: null, random: null };
    const node5 = { val: 5, next: null, random: null };

    expect(copyRandomList(node1)).toEqual(node1);
  })
})