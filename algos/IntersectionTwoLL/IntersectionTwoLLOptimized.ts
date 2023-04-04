export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pointerA:ListNode = headA;
  let pointerB: ListNode  = headB;

  while(pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}

export default getIntersectionNode;