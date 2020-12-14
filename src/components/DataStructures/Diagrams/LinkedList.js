import React, { Component } from "react";
import squares from "../../Helpers/squares";
import LinkedList from "../LinkedList/LinkedList.js";
import LinkedListSVG from "../../../assets/Linked List Visual.svg";

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
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-8 col-lg-4">
                    <img
                        className="img-fluid"
                        src={LinkedListSVG}
                        alt="Linked List SVG animation"
                    />
                </div>
            </div>
        );
    }
}

export default LinkedListDiagram;
