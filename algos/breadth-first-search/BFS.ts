export default function breadthFirstSearcb(
    graph: Record<string, Array<string>>,
    source: string
): Array<string> {
    const result: string[] = []
    const queue = new Queue<string>();
    const visited = new Set<string>();

    queue.enqueue(source);

    while(queue.length > 0) {
        let node = queue.dequeue();

        if(node === null || visited.has(node)) {
            continue
        }

        visited.add(node)

        result.push(node)

        for(let neighbor of graph[node]) {
            queue.enqueue(neighbor)
        }
    }

    //return 
    return result
}


class Node<T> {
    value: T;
    next: Node<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
}

class Queue<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;
  
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    isEmpty(): boolean {
      return this.length === 0;
    }
  
    enqueue(item: T): void {
      const newNode = new Node(item);
      if (this.isEmpty()) {
        this.head = newNode;
      } else if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
      this.length++;
    }
  
    dequeue(): T | null {
      if (this.isEmpty() || !this.head) {
        return null;
      } else {
        const removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        this.length--;
        if (this.isEmpty()) {
          this.tail = null;
        }
        return removedNode.value;
      }
    }
  }