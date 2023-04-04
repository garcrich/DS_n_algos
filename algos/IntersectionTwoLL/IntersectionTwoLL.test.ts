import getIntersectionNode, { ListNode } from './IntersectionTwoLL';
import getIntersectionNodeOptimized from './IntersectionTwoLLOptimized';

describe('IntersectionTwoLL', () => {
  it('should return 3', () => {
    expect(getIntersectionNode(LinkedListA1, LinkedListB1)).toBe(LinkedListA1.next.next)
    expect(getIntersectionNode(LinkedListA2, LinkedListB2)).toBe(null)
    expect(getIntersectionNode(LinkedListA3, LinkedListB3)).toBe(null)
    expect(getIntersectionNodeOptimized(LinkedListA4, LinkedListB4)).toBe(null)
  })
 })

 describe('IntersectionTwoLLOptimized', () => {
  it('should return 3', () => {
    expect(getIntersectionNodeOptimized(LinkedListA1, LinkedListB1)).toBe(LinkedListA1.next.next)
    expect(getIntersectionNodeOptimized(LinkedListA2, LinkedListB2)).toBe(null)
    expect(getIntersectionNodeOptimized(LinkedListA3, LinkedListB3)).toBe(null)
    expect(getIntersectionNodeOptimized(LinkedListA4, LinkedListB4)).toBe(null)
  })
})

const LinkedListA1 = new ListNode(1);
LinkedListA1.next = new ListNode(2);
LinkedListA1.next.next = new ListNode(3);
LinkedListA1.next.next.next = new ListNode(4);
LinkedListA1.next.next.next.next = new ListNode(5);

const LinkedListB1 = new ListNode(3);
LinkedListB1.next = new ListNode(1);
LinkedListB1.next.next = LinkedListA1.next.next

const LinkedListA2 = new ListNode(5);
LinkedListA2.next = new ListNode(4);
LinkedListA2.next.next = new ListNode(3);
LinkedListA2.next.next = new ListNode(2);
LinkedListA2.next.next.next = new ListNode(1);

const LinkedListB2 = new ListNode(1);
LinkedListB2.next = new ListNode(2);
LinkedListB2.next.next = new ListNode(3);
LinkedListB2.next.next.next = new ListNode(4);
LinkedListB2.next.next.next.next = new ListNode(5);

const LinkedListA3 = new ListNode(1);
const LinkedListB3 = new ListNode(null);

const LinkedListA4 = new ListNode(null);
const LinkedListB4 = new ListNode(1);
