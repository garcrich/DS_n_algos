import validPalindromeList, {ListNode} from './validPalindromeList'
import validPalindromeListStack from './validPalindromeListStack'
import validPalindromeListOptimized from './validPalindromeListOptimized'
describe('validAnagramList', () => {
  it('should return true if the list is a valid anagram', () => {
    expect(validPalindromeList(null)).toBe(true)
    expect(validPalindromeListOptimized(null)).toBe(true)
    expect(validPalindromeListStack(null)).toBe(true)
    
    expect(validPalindromeList(new ListNode(1))).toBe(true)
    expect(validPalindromeListStack(new ListNode(1))).toBe(true)
    expect(validPalindromeListOptimized(new ListNode(1))).toBe(true)

    const list1 = new ListNode(1, new ListNode(2, new ListNode(3)))
    expect(validPalindromeList(list1)).toBe(false)
    expect(validPalindromeListStack(list1)).toBe(false)
    expect(validPalindromeListOptimized(list1)).toBe(false)

    const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))))
    expect(validPalindromeList(list2)).toBe(true)
    expect(validPalindromeListStack(list2)).toBe(true)
    expect(validPalindromeListOptimized(list2)).toBe(true)

    const list3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(2, new ListNode(1))))))
    expect(validPalindromeList(list3)).toBe(true)
    expect(validPalindromeListStack(list3)).toBe(true)
    expect(validPalindromeListOptimized(list3)).toBe(true)

  })
})