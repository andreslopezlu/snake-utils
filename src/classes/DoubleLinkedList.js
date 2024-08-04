import { Node } from './Node';

class DoubleLinkedList {
  constructor(){
    this.first = null;
    this.last = null;
    this.len = 0;
  }

  isolateNode(node) {
    node.prev = null;
    node.next = null;
    return node;
  }

  push(data) {
    const node = new Node(data);

    this.len += 1;
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      node.prev = this.last;
      this.last = node;
    }
  }

  unshift(data) {
    const node = new Node(data);

    this.len += 1;
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.first.prev = node;
      node.next = this.first;
      this.first = node;
    }
  }

  pop() {
    if (!this.first) return null;

    const node = this.last;
    this.last = this.last.prev;
    this.last ? this.last.next = null : this.first = null;
    this.len -= 1;

    return this.isolateNode(node);
  }

  shift() {
    if (!this.first) return null;

    const node = this.first;

    this.first = this.first.next;
    this.first ? this.first.prev = null : this.last = null;
    this.len -= 1;

    return this.isolateNode(node);
  }

  getValues() {
    const resultList = [];
    let node = this.first;

    while (node) {
      resultList.push(node.data);
      node = node.next;
    }

    return resultList;
  }

}

export {DoubleLinkedList};
