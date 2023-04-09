import firstUniqChar from "./firstUniqueChar";

describe("firstUniqChar", () => {
  it("should return index of first unique character", () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
    expect(firstUniqChar("loveleetcode")).toEqual(2);
  });

  it("should return -1 if no unique character found", () => {
    expect(firstUniqChar("cc")).toEqual(-1);
  });

  it("should return -1 if no unique character found", () => {
    expect(firstUniqChar("")).toEqual(-1);
  })

});