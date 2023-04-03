import maxProfit from "./bestTimeToBuyStock";

describe("maxProfit", () => {

  it('should return 1', () => {
    expect(maxProfit([1, 2])).toEqual(1);
  });

  it('should return 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });

  it('should return 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });

  it('should return 0', () => {
    expect(maxProfit([])).toEqual(0);
  });

  it('should return 0', () => {
    expect(maxProfit([1])).toEqual(0);
  });
});