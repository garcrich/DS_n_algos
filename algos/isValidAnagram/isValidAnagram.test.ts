import isAnagram from "./isValidAnagram";

describe("isAnagram", () => {
  it("should return true if the two strings are anagrams", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("aacc", "ccac")).toBe(false);
    expect(isAnagram("ab", "a")).toBe(false);
    expect(isAnagram("dab", "bad")).toBe(true);
    
  });
});