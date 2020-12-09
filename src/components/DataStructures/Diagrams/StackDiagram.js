import React, { Component } from "react";
import squares from "../../Helpers/squares";
import StackLinkedList from "../Stack/StackLinkedList.js";

const list = new StackLinkedList();
list.push(1);
list.push(33);
list.push(7);
class StackDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: list,
        };
    }

    render() {
        return this.state.list.displayList();
    }
}

export default StackDiagram;
