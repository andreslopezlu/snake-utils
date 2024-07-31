import { DoubleLinkedList } from "./DoubleLinkedList";
class Queue {
    constructor() {
        this._list = new DoubleLinkedList();
    }

    add(data) {
        let node = new Node(data);
        this._list.push(node);
    }

    pop() {
        let data = this._list.shift();
        return data;
    }

}

export {Queue}