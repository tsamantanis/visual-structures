import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';
import DataStructure from '../DataStructures/DataStructure';
import dataStructures from '../Helpers/dataStructures';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <DataStructure
                    dataStructures={dataStructures}
                />
            </div>
        );
    }
}

export default Main;
