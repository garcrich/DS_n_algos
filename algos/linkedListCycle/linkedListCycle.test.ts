import linkedListCycle, {ListNode} from "./linkedListCycle";

describe("linkedListCycle", () => {
  it('should return true', () => {
    expect(linkedListCycle(listNode1)).toBe(false)
    expect(linkedListCycle(listNode2)).toBe(true)
    expect(linkedListCycle(listNode3)).toBe(false)
  })
})

let listNode1 = new ListNode(1)
listNode1.next = new ListNode(2)
listNode1.next.next = new ListNode(3)
listNode1.next.next.next = new ListNode(4)
listNode1.next.next.next.next = new ListNode(5)

let listNode2 = new ListNode(1)
listNode2.next = new ListNode(2)
listNode2.next.next = new ListNode(3)
listNode2.next.next.next = new ListNode(4)
listNode2.next.next.next.next = new ListNode(5)
listNode2.next.next.next.next.next = listNode2

let listNode3 = new ListNode(1)
listNode3.next = new ListNode(2)