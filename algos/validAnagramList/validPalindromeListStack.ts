export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindromeListStack(head) {
  if (!head || !head.next) {
    return true;
  }

  // Find the middle node of the linked list using a slow and fast pointer
  let slow = head;
  let fast = head;
  let stack = [];

  while (fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // If the linked list has an odd number of nodes, skip the middle node
  if (fast) {
    slow = slow.next;
  }

  // Pop values from the stack and compare them with the remaining nodes in the linked list
  while (slow) {
    if (stack.pop() !== slow.val) {
      return false;
    }
    slow = slow.next;
  }

  return true;
}


export default isPalindromeListStack;