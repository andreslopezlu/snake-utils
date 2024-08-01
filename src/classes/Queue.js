import { DoubleLinkedList } from "./DoubleLinkedList";
class Queue {
    constructor() {
        this._list = new DoubleLinkedList();
    }

    add(data) {
        this._list.push(data);
    }

    pop() {
        return this._list.shift();
    }

}

export {Queue}
