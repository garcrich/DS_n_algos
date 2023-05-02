import carFleet from "./carFleet";


describe("carFleet", () => {
  it("should return 3 for target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]", () => {
    expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toEqual(3);
  })

  it('should return 1 for target = 10, position = [0,4,2], speed = [2,1,3]', () => {
    expect(carFleet(10, [0, 4, 2], [2, 1, 3])).toEqual(1);
  })
})