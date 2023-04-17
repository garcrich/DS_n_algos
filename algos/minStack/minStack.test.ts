import { MinStack } from "./minStack";

describe("MinStack", () => {
  it("should create an empty stack", () => {
    const stack = new MinStack();
    expect(stack).toBeDefined();
  });

  it("should push a value to the stack", () => {
    const stack = new MinStack();
    stack.push(10);
    expect(stack.top()).toBe(10);
  })

  it("should pop a value from the stack", () => {
    const stack = new MinStack();
    stack.push(10);
    stack.push(20);
    expect(stack.top()).toBe(20);
    expect(stack.getMin()).toBe(10);
  });

  it("should return the minimum value in the stack", () => {
    const stack = new MinStack();
    stack.push(10);
    stack.push(20);
    stack.push(5);
    expect(stack.getMin()).toBe(5);
  });

  it("should show the top value in the stack", () => {
    const stack = new MinStack();
    stack.push(10);
    stack.push(20);
    stack.push(5);
    expect(stack.top()).toBe(5);
  })

  it("should return the minimum value in the stack", () => {
    const stack = new MinStack();
    stack.push(10);
    stack.push(20);
    stack.push(5);
    expect(stack.getMin()).toBe(5);
  })
})