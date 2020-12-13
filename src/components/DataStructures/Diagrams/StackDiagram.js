import React, { Component } from "react";
import squares from "../../Helpers/squares";
import StackLinkedList from "../Stack/StackLinkedList.js";
import StackArraySVG from '../../../assets/Stack Array Visual.svg';

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
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-8">
                    <img className="img-fluid" src={ StackArraySVG } alt="Stack push and pop method SVG animation" />
                </div>
            </div>
        )
    }
}

export default StackDiagram;
