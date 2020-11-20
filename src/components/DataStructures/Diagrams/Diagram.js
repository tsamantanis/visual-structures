import React, {Component} from 'react';
import Array from './Array';
import LinkedListDiagram from './LinkedList';

import '../../../assets/styles/Diagram.css';
class Diagram extends Component {
    render() {
        return (
            <div className="diagram">
                {
                    this.props.selected === 'ARRAY' ?
                        <div className="array">
                            <Array />
                        </div>
                    :
                    this.props.selected === 'LINKED LIST' ?
                        <div className="linked-list">
                            <LinkedListDiagram />
                        </div>
                    : null
                }
            </div>
        );
    }
}

export default Diagram;
