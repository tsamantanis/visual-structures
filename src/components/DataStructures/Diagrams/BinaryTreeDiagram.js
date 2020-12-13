import React, { Component } from "react";
import BinaryTreeSVG from '../../../assets/Binary Tree Visual.svg';

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
