function evalRPN(tokens:string[]) : number {
  const stack: number[] = [];

  type OperationsType = {
    [key: string]: (a: number, b: number) => number;
  }

  const operations: OperationsType = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  }

  for (const token of tokens) {
    const operation = operations[token];

    if(operation) {
      const num2 = stack.pop()
      const num1 = stack.pop()
      stack.push(operation(num1, num2));
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
}

evalRPN(['2', '1', '+', '3', '*']);

export default evalRPN;