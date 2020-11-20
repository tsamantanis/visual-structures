import squares from '../../Helpers/squares';
const Node = require('./Node.js');

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Prepend - Insert at head
    preppend(newData) {
        let newNode = new Node(newData);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
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
        return (this.head === null);
    }

    printList() {
        if (this.isEmpty()) {
            console.log("Linked List is empty");
            return false;
        } else {
            let temp = this.head;
            while (temp !== null) {
                console.log(String(temp.data) + " <-> ");
                temp = temp.next;
            }
            console.log("null");
            return true;
        }
    }

    displayList() {
        let visuals = [];
        let currentNode = this.head;
        let index = 0;
        while (currentNode !== null) {
            visuals.push(
                <>
                {currentNode === this.head ?
                    <span className="head-pointer text-light-blue">HEAD</span>
                : null }
                <div className="linked-list-item" key={currentNode.data}>
                    <img
                        src={squares[index % this.getSize()]}
                        className="isometric-square img-fluid"
                        alt="Isometric square"
                    />
                </div>
                {currentNode === this.tail ?
                    <span className="tail-pointer text-light-blue">TAIL</span>
                : null }
                </>
            );
            currentNode = currentNode.next;
            index += 1;
        }
        return visuals;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    getSize() {
        let size = 0;
        let currentNode = this.head;
        while (currentNode != null) {
            size += 1;
            currentNode = currentNode.next
        }
        return size;

    }

    search(value) {
        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data === value) {
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
        if (this.head.next !== null) {
            const tempNode = this.head.next;
            this.head.next = null;
            this.head = tempNode;
        } else {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    delete(value) {
        let deleted = null;

        if (this.isEmpty()) {
            return false;
        }

        if (this.head.data === value) {
            this.deleteFromHead();
        } else if (this.tail.data === value) {
            this.deleteFromTail()
        }

        let currentNode = this.head;
        while (currentNode != null) {
            if (currentNode.data === value) {
                const prevNode = currentNode.prev;
                const nextNode = currentNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
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
        if (this.tail === this.head) {
            this.deleteFromHead();
        }
        if (this.tail !== null) {
            const tempNode = this.tail.prev;
            tempNode.next = null
            this.tail.prev = null;
            this.tail = tempNode;

        }
        return this;
    }
}

const list = new LinkedList();
list.append(1);
list.append(33);
list.append(7);
export default list;
