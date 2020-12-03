import LinkedList from '../LinkedList/LinkedList';

class QueueLinkedList extends LinkedList {
    constructor(props) {
        super(props)
    }

    enqueue(newData) {
        this.preppend(newData);
    }

    dequeue() {
        this.deleteFromTail();
    }
}

export default QueueLinkedList;
