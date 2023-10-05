class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value); // creates the node using class Node

    if (this.head) { // if the first Node exitsts
      this.tail.next = node; // inserts the created node after the tail of our Queue
      this.tail = node; // now the created node is the last node
    } else { // if there are no nodes in the Queue
      this.head = node; // the created node is a head
      this.tail = node; // also the created node is a tail in Queue because it is single.
    }

    this.length++; // increases the length of Queue by 1
  }

  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    this.length--; // decreaments the length of our Queue

    return current.value; // returns the removed Node's value
  }

  print(shouldPrintOnlyValue) {
    const output = [];

    let current = this.head; // saves a link to the head of the queue

    while (current) { // goes through each Node of the Queue
      output.push(shouldPrintOnlyValue ? current.value : current);
      current = current.next; // moves link to the next node after head
    }

    return output;
  }
}

const queue = new Queue();
queue.enqueue('Oleg 1');
queue.enqueue('Oleg 2');
queue.enqueue('Oleg 3');
queue.enqueue('Oleg 4');
queue.enqueue('Oleg 5');

console.log('queue', queue.print(true));
