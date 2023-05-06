class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: Node | null): Node | null{
  if (head === null) return null;

  const nodeMap: Map<Node, Node> = new Map();

  let currentNode: Node | null = head;

  while (currentNode !== null) {
    nodeMap.set(currentNode, new Node(currentNode.val));
    currentNode = currentNode.next;
  }

  currentNode = head;

  while(currentNode !== null) {
    const newNode = nodeMap.get(currentNode);
    newNode.next = currentNode.next ? nodeMap.get(currentNode.next) : null;
    newNode.random = currentNode.random ? nodeMap.get(currentNode.random) : null;
    currentNode = currentNode.next;
  }

  return nodeMap.get(head) || null;
}

export default copyRandomList;