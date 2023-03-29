import longestCommonPrefix from "./longestCommonPrefix";

describe("longestCommonPrefix", () => {
    it("should return the longest common prefix", () => {
        expect(
            longestCommonPrefix(["flower","flow","flight"])
        ).toEqual("fl")

        expect(
            longestCommonPrefix(["react","reactjs","reactnative"])
        ).toEqual("react")

        expect(
            longestCommonPrefix(["dog","racecar","car"])
        ).toEqual("")
    });
})