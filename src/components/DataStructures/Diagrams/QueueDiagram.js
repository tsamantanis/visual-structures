import React, { Component } from "react";
import squares from "../../Helpers/squares";
import QueueLinkedList from "../Queue/QueueLinkedList.js";
import QueueArraySVG from '../../../assets/Queue Array Visual.svg';

const list = new QueueLinkedList();
list.enqueue(1);
list.enqueue(33);
list.enqueue(7);
class QueueDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: list,
        };
    }

    render() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-8">
                    <img className="img-fluid" src={ QueueArraySVG } alt="Queue enqueue and dequeue method SVG animation" />
                </div>
            </div>
        )
    }
}

export default QueueDiagram;
