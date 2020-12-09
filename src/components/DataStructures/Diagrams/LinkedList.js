import React, { Component } from "react";
import squares from "../../Helpers/squares";
import LinkedList from "../LinkedList/LinkedList.js";

const list = new LinkedList();
list.append(1);
list.append(33);
list.append(7);
class LinkedListDiagram extends Component {
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

export default LinkedListDiagram;
