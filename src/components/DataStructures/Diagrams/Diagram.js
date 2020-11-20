import React, {Component} from 'react';
import Array from './Array';

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
                    : null
                }
            </div>
        );
    }
}

export default Diagram;