export class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if(this.minStack.length == 0 || 
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val)
    }
  }

  pop(): void {
    const val = this.stack.pop()
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop()
    }
  }

  top(): number {
   return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }

}

let  stack  =  new  MinStack();
stack.push(10);
stack.push(20);
stack.push(5);
console.log(stack.getMin());
console.log(stack.top());
stack.pop();
console.log(stack.getMin());
console.log(stack.top());
