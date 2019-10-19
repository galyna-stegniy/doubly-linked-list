const Node = require('./node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this.length = 0;
  }

  append(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this.length++;
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    let nodeCounter = 0;
    let currentNode = this._head;
    while (nodeCounter < index) {
      currentNode = currentNode.next;
      nodeCounter++;
    }
    return currentNode.data;
  }

  insertAt(index, data) {
    let node = new Node(data);
    let currentNode = this._head;
    let nodeCounter = 0;
    while (nodeCounter < index) {
      currentNode = currentNode.next;
      currentNode.prev.next = node;
      node.prev = currentNode.prev;
      node.prev = node;
      node.next = currentNode;
      nodeCounter++;
    }
    return this;
  }

  isEmpty() {
    return !this.length;
  }

  clear() {
    this._head.data = null;
    this._tail.data = null;
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    if (this.length <= 1) {
      return this;
    }
    let currentNode = this._head;
    let nodeCounter = 0;
    while (nodeCounter < index) {
      currentNode = currentNode.next;
      nodeCounter++;
    }
    var prev = currentNode.prev;
    var next = currentNode.next;
    prev.next = next;
    next.prev = prev;
    return this;
  }

  reverse() {
    let currentNode = this._head;
    let temp;
    while (currentNode) {
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }
    temp = this._head;
    this._head = this._tail;
    this._tail = temp;
    return this;
  }

  indexOf(data) {
    let currentNode = this._head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode.data === data) {
        return i;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
}

module.exports = LinkedList;
