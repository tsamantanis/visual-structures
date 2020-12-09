import React from "react";
import LinkedList from "../LinkedList/LinkedList";
import squares from "../../Helpers/squares";
import dots from "../../Helpers/dots";
import SVGInline from "../../Helpers/SVGInline";

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

    displayList() {
        let visuals = [];
        let currentNode = this.head;
        let index = 0;
        while (currentNode !== null) {
            visuals.push(
                <React.Fragment key={currentNode.data}>
                    {currentNode === this.head ? (
                        <React.Fragment>
                            <span className="head-pointer push-pointer text-light-blue">
                                PUSH
                            </span>
                            <span className="head-pointer pop-pointer text-light-blue">
                                POP
                            </span>
                        </React.Fragment>
                    ) : null}
                    <div className="stack-item" key={currentNode.data}>
                        <img
                            src={squares[index % this.getSize()]}
                            className="isometric-square img-fluid"
                            alt="Isometric square"
                        />
                        {currentNode !== this.tail ? (
                            <SVGInline
                                url={dots[index % this.getSize()]}
                                className="gradient-dots"
                            />
                        ) : null}
                    </div>
                    {currentNode === this.tail ? (
                        <span className="tail-pointer text-light-blue">
                            TAIL
                        </span>
                    ) : null}
                </React.Fragment>
            );
            currentNode = currentNode.next;
            index += 1;
        }
        return visuals;
    }
}

const stack = new StackLinkedList();
stack.push(3);
stack.push(2);
stack.push(1);
stack.pop();

export default StackLinkedList;
