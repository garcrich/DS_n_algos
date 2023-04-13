import implementQueueUsingStack from './implementQueueUsingStack';

describe('implementQueueUsingStack', () => {
  it('should return an array of numbers', () => {
    const queue = new implementQueueUsingStack();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    const result = queue.pop();
    expect(result).toEqual(1);
  });

  it('should return an array of numbers', () => {
    const queue = new implementQueueUsingStack();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.pop();
    queue.pop();
    const result = queue.pop();
    expect(result).toEqual(3);
  });
})