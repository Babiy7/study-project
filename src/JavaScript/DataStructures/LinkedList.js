class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  toArray(onlyData) {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(onlyData ? current.data : current);

      current = current.next;
    }

    return output;
  }

  insertAfter(after, data) {
    const found = this.find(after);

    if (!found) {
      return;
    }

    found.next = new Node(data, found.next);
  }

  remove(data) {
    // debugger;
    if (!this.head) {
      return;
    }

    if (this.head && this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.data === data) {
      this.tail = current;
    }
  }

  find(data) {
    if (!data) {
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    }
  }
}

const list = new LinkedList();
list.append('My');
list.append('name');

// console.log('list', list.toArray());
// console.log('list only data', list.toArray(true));

list.insertAfter('My', 'Oleg');

list.remove('name');

console.log('list', list.toArray(true));
