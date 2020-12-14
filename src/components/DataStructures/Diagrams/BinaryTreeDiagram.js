import React, { Component } from "react";
import BinaryTree from '../BinaryTree/BSTree';
import BinaryTreeSVG from '../../../assets/Binary Tree Visual.svg';

const binaryTree = new BinaryTree();
binaryTree.insert(15);
binaryTree.insert(22);
binaryTree.insert(10);
binaryTree.insert(17);
binaryTree.insert(25);

console.log(binaryTree.search(10).data);


class BinaryTreeDiagram extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //
    //     };
    // }

    render() {
        return (
            <div className="row justify-content-center align-items-center">
                <div className="col-12">
                    <img className="img-fluid" src={ BinaryTreeSVG } alt="Binary Tree SVG animation" />
                </div>
            </div>
        )
    }
}

export default BinaryTreeDiagram;
