import React, {Component} from 'react';
import Array from './Array';
import LinkedListDiagram from './LinkedList';
import QueueDiagram from './QueueDiagram';
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
                    :
                    this.props.selected === 'QUEUE' ?
                        <div className="linked-list">
                            <QueueDiagram />
                        </div>
                    : null
                }
            </div>
        );
    }
}

export default Diagram;
