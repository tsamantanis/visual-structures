import React, {Component} from 'react';
import squares from '../../Helpers/squares';
import QueueLinkedList from '../Queue/QueueLinkedList.js';

const list = new QueueLinkedList();
list.enqueue(1);
list.enqueue(33);
list.enqueue(7);
class LinkedListDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: list,
        }
    }

    render() {
        return (
            this.state.list.displayList()
        );
    }
}

export default LinkedListDiagram;
