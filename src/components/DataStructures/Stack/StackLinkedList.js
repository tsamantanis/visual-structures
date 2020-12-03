import LinkedList from '../LinkedList/LinkedList';

class StackLinkedList extends LinkedList {
    constructor(props) {
        super(props);
    }

    push(item) {
        this.append(item);
    }

    pop() {
        this.deleteFromTail();
    }
}

const stack = new StackLinkedList();
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop()

export default StackLinkedList;
