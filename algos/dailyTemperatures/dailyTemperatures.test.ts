import dailyTemperatures from './dailyTemperatures';

describe('dailyTemperatures', () => {
  it('should return [1,1,4,2,1,1,0,0] for [73,74,75,71,69,72,76,73]', () => {
    expect(dailyTemperatures([73,74,75,71,69,72,76,73])).toEqual([1,1,4,2,1,1,0,0]);
  });
})