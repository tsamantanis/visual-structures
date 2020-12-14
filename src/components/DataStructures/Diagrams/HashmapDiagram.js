import React, { Component } from "react";
import Hashmap from '../Hashmap/Hashmap';
import HashmapSVG from '../../../assets/HashMap Visual.svg';

const hashTable = new Hashmap(10)

hashTable.insert({"Jess": 30})
console.log(hashTable.lookup("Jess"))
class HashmapDiagram extends Component {
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
                    <img className="img-fluid" src={ HashmapSVG } alt="Hashmap SVG animation" />
                </div>
            </div>
        )
    }
}

export default HashmapDiagram;
