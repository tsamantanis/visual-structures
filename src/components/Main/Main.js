import React, {Component} from 'react';
import DataStructure from '../DataStructures/DataStructure';
import dataStructures from '../Helpers/dataStructures';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <DataStructure
                    dataStructures={dataStructures}
                />
            </div>
        );
    }
}

export default Main;
