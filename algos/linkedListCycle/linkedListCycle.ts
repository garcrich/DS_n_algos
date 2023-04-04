export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function linkedListCyle(head: ListNode | null): boolean {
  let isCycle:boolean = false;
  if(!head || !head.next) return isCycle;

  let slowPointer:ListNode = head;
  let fastPointer:ListNode = head;

  while(fastPointer && fastPointer.next){
    slowPointer = slowPointer
    fastPointer = fastPointer?.next

    if(slowPointer === fastPointer) {
      isCycle = true
      break
    }
  }

  return isCycle
}

export default linkedListCyle