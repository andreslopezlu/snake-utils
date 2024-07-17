

class DoubleLinkedList {
    constructor(){
        this.first = null;
        this.last = null;
    }

    push(node) {
        if (this.first === null) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            node.prev = this.last;
            this.last = node;
        }
    }

    unshift(node) {
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
        if (this.first !== none) {
            if (this.first == this.last) {
                this.first = node;
                this.last = node;
            } else {
                this.last = this.last.prev;
                this.last.next = null;
            }
        }
    }

    shift() {
        if (this.first !== null){
            this.first = this.first.next;
            if (this.first === null) {
                this.last = null
            } else {
                this.first.prev = null
            }
        }
    }
}