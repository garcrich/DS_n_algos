import reversedList, { ListNode } from "./reversedLinkedList";

describe("reversedLinkedList", () => {
  it("should reverse a linked list", () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3)));
    const reversed = reversedList(list);
    expect(reversed.val).toBe(3);
    expect(reversed.next.val).toBe(2);
    expect(reversed.next.next.val).toBe(1);
  });
  it("should reverse a linked list", () => {
    const list = new ListNode(1, new ListNode(2));
    const reversed = reversedList(list);
    expect(reversed.val).toBe(2);
    expect(reversed.next.val).toBe(1);
  });
  it("should reverse a linked list", () => {
    const list = new ListNode(1);
    const reversed = reversedList(list);
    expect(reversed.val).toBe(1);
  });
  it("should reverse a linked list", () => {
    const list = null;
    const reversed = reversedList(list);
    expect(reversed).toBe(null);
  });
});