export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function validPalindromeListOptimized(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  // Find the midpoint of the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  let prev = null;
  let next = null;

  while (slow) {
    next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the first and second half of the linked list
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true
}

export default validPalindromeListOptimized;