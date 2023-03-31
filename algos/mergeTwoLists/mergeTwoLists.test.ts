import mergeTwoLists, { ListNode } from "./mergeTwoList";

describe('mergeTwoLists', () => {
  it('should merge two sorted lists', () => {
    expect(mergeTwoLists(null, null)).toBe(null);
    expect(mergeTwoLists(null, new ListNode(1))).toEqual(new ListNode(1));
    expect(mergeTwoLists(new ListNode(1), null)).toEqual(new ListNode(1));
    expect(mergeTwoLists(new ListNode(1), new ListNode(2))).toEqual(new ListNode(1, new ListNode(2)));
    expect(mergeTwoLists(new ListNode(1, new ListNode(2)), new ListNode(3))).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    expect(mergeTwoLists(new ListNode(1, new ListNode(2)), new ListNode(1))).toEqual(new ListNode(1, new ListNode(1, new ListNode(2))));
    expect(mergeTwoLists(new ListNode(2, new ListNode(3)), new ListNode(1))).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
  })
})