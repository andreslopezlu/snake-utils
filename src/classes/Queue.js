class Queue extends DoubleLinkedList{
    constructor() {
        this.list = new DoubleLinkedList()
    }

    add(data) {
        this.lista.push(data)
    }

    run() {
        this.lista.shift()
    }
}