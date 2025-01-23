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
            let pointer = this.head;
            while (pointer.nextNode) {
                counter++;
                pointer = pointer.nextNode;
            }
        }
        return counter;
    }

    at(index) {
        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            pointer = pointer.nextNode;
        }
        return pointer;
    }

    pop() {
        let pointer = this.head;
        while (pointer.nextNode !== this.tail) {
            pointer = pointer.nextNode;
        }
        pointer.nextNode = null;
        this.tail = pointer;
    }

    contains(value) {
        let pointer = this.head;
        if (pointer.value === value) {return true};
        while (pointer.nextNode) {
            pointer = pointer.nextNode;
            if (pointer.value === value) {return true};
        }
        return false;
    }
}

class Node {
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
}