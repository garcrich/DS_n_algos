export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function validPalindromeList(head: ListNode | null): boolean {
  if(head === null || head.next === null) return true

  let validPalindrome: boolean = true;
  let reversedValsArr: number[] = []
  let valsArr: number[] = []
  while(head) {
    reversedValsArr.push(head.val)
    head = head.next
  }

  valsArr = [...reversedValsArr].reverse()

  for(let i = 0; i < valsArr.length; i++) {
    if(valsArr[i] !== reversedValsArr[i]) {
      validPalindrome = false
      break
    }
  }

  return validPalindrome
}

export default validPalindromeList;