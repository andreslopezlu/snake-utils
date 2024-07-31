import { DoubleLinkedList } from "./DoubleLinkedList";
class Queue {
    constructor() {
        this._list = new DoubleLinkedList();
    }

    add(data) {
        this._list.push(data);
    }

    pop() {
        let data = this._list.shift();
        return data;
    }

}

export {Queue}
