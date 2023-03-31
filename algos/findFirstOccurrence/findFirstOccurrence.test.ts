import findFirstOccurrence from "./findFirstOccurrence";

describe("findFirstOccurrence", () => {
  it('should return the index of the first occurrence of the needle in the haystack', () => {
    expect(findFirstOccurrence('hello', 'l')).toBe(2)
  })
  it('should return -1 if the needle is not found in the haystack', () => {
    expect(findFirstOccurrence('hello', 'z')).toBe(-1)
  })

  it('should return 0 if the needle is an empty string', () => {
    expect(findFirstOccurrence('hello', '')).toBe(0)
  })
})