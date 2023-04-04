export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let intersection: ListNode | null = null;
  if(!headA || !headB) return intersection;

  let nodeTracker: Set<ListNode> = new Set();
  let pointerA:ListNode = headA;
  let pointerB: ListNode  = headB;

  while(pointerA) {
    nodeTracker.add(pointerA);
    pointerA = pointerA.next;
  }

  while(pointerB) {
    if(nodeTracker.has(pointerB)) {
      intersection = pointerB;
    }
  }

  return intersection;
}

export default getIntersectionNode;