import combinationSum from "./combination_sum";

describe("combinationSum", () => {
    it("should return the correct result", () => {
        const candidates = [2, 3, 6, 7];
        const target = 7;
        const expected = [
            [2, 2, 3],
            [7],
        ];
        const actual = combinationSum(candidates, target);
        expect(actual).toEqual(expected);
    })
})