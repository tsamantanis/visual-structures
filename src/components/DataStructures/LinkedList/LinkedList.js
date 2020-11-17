
const Node = require('./Node.js');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Prepend - Insert at head
    prepend(newData) {
        let newNode = new Node(newData);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        if (this.tail === null) {
            this.tail = newNode;
        }
        return this; //returning the updated list
    }

    // Append - Insert at tail
    append(newData) {
        let newNode = new Node(newData);
        if (this.tail !== null) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            newNode.prev = this.head;
            this.tail = newNode;
        }

        if (this.head === null) {
            this.head = newNode;
        }
    }

    isEmpty() {
        return (this.head == null);
    }

    printList() {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return false;
        } else {
            let temp = this.head;
            while (temp != null) {
                process.stdout.write(String(temp.data));
                process.stdout.write(" -> ");
                temp = temp.next;
            }
            console.log("null");
            return true;
        }
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    search(value) {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data == value) {
                return true;
            }
            currentNode = currentNode.next
        }
        return false;
    }

    deleteFromHead() {
        if (this.isEmpty()) {
            return this;
        }
        if (this.head !== null) {
            tempNode = this.head.next;
            this.head.next = null;
            this.head = tempNode;
        }
        return this;
    }

    delete(value) {
        let deleted = null;

        if (this.isEmpty()) {
            return false;
        }

        if (this.head.data === value) {
            deleteFromHead();
        } else if (this.tail.data === value) {
            deleteFromTail()
        }

        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data === value) {
                prevNode = currentNode.prev;
                nextNode = currentNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                currentNode.next = null;
                currentNode.prev = null;
                return this;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    deleteFromTail() {
        if (this.isEmpty()) {
            return this;
        }
        if (this.tail !== null) {
            tempNode = this.tail.prev;
            this.tail.prev = null;
            this.tail = tempNode;
            tempNode.next = null;
        }
        return this;
    }
}
