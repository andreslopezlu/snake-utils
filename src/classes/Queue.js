import { DoubleLinkedList } from './DoubleLinkedList';

class Queue {
  constructor() {
    this._list = new DoubleLinkedList();
  }

  add(data) {
    this._list.push(data);
  }

  pop() {
    const node = this._list.shift();
    return node.data;
  }
}

export {Queue};
