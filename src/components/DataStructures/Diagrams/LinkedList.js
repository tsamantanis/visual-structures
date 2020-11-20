import React, {Component} from 'react';
import squares from '../../Helpers/squares';
const list = require('../LinkedList/LinkedList.js');
const Node = require('../LinkedList/Node.js');

class LinkedListDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: list.default,
        }
    }

    render() {
        return (
            this.state.list.displayList()
        );
    }
}

export default LinkedListDiagram;
