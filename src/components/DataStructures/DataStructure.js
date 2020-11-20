import React, {Component} from 'react';
import TitleCard from '../Helpers/TitleCard';
import Grid from '../../assets/Grid.svg';
import Diagram from './Diagrams/Diagram';

class DataStructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'ARRAY'
        }
    }

    setSelected = (selected) => {
        this.setState({selected});
    }
    render() {
        return (
            <div className="row mt-5">
                <div className="col-12 col-lg-3">
                    { this.props.dataStructures.map((structure) => {
                        return (
                            <TitleCard
                                key={structure.title}
                                title={structure.title}
                                color={structure.color}
                                selected={this.state.selected === structure.title}
                                setSelected={this.setSelected}
                            />
                        );
                    })}
                    </div>
                <div className="col-12 col-lg-8 offset-lg-1 text-white text-center">
                    <img src={Grid} className="img-fluid" alt="Diagram Grid"/>
                    <Diagram
                        selected={this.state.selected}
                    />
                </div>
            </div>
        );
    }
}

export default DataStructure;
