export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function reversedList(head: ListNode | null): ListNode | null {
  if(head === null) return null
  if(head.next === null) return head

  let reversedArr: ListNode[] = []
  let current = head
  let reversedTree: ListNode | null = new ListNode(null)
  let reversedPointer: ListNode | null = reversedTree

  while(current !== null) {
    reversedArr.unshift(current)
    current = current.next
  }

  for(let i = 0; i < reversedArr.length; i++) {
    reversedPointer.val = reversedArr[i].val
    reversedPointer.next = new ListNode(null)
    reversedPointer = reversedPointer.next
  }
  
  return reversedTree;

}


export default reversedList;