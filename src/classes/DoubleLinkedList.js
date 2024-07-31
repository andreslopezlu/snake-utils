class DoubleLinkedList {
    constructor(){
        this.first = null;
        this.last = null;
        this.len = 0;
    }

    push(node) {
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

    unshift(node) {
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
        this.len -= 1;
        let node = null;
        if (this.first !== null) {
            if (this.first == this.last) {
                node = this.first;
                this.first = null;
                this.last = null;
                return node;
            } else {
                node = this.last;
                this.last = this.last.prev;
                this.last.next = null;
            }
        }
        return node;
    }

    shift() {
        this.len -= 1;
        let node = null;
        node = this.first
        if (this.first !== null){
            this.first = this.first.next;
            if (this.first === null) {
                this.last = null;
            } else {
                this.first.prev = null;
            }
        }
        return node;
    }

    getValues() {
        const resultList = [];
        let node = this.first;

        while (node) {
            resultList.push(node.data);
            node = node.next
        }

        return resultList;
    }

}

export {DoubleLinkedList};
