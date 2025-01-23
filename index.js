class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node();
        newNode.value = value;
        if (this.tail) {
            this.tail.nextNode = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new Node();
        newNode.value = value;
        if (this.head) {
            newNode.nextNode = this.head;
        }
        this.head = newNode;
    }

    size() {
        let counter = 0;
        if (this.head) {
            counter++;
            let current = this.head;
            while (current.nextNode) {
                counter++;
                current = current.nextNode;
            }
        }
        return counter;
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}