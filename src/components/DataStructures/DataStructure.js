import React, {Component} from 'react';
import TitleCard from '../Helpers/TitleCard';
import Grid from '../../assets/Grid.svg';
class DataStructure extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-12 col-lg-3">
                    { this.props.dataStructures.map((structure) => {
                        return (
                            <TitleCard
                                title={structure.title}
                                color={structure.color}
                            />
                        );
                    })}
                    </div>
                <div className="col-12 col-lg-8 offset-lg-1 text-white text-center">
                    <img src={Grid} className="img-fluid" alt="Diagram Grid"/>
                </div>
            </div>
        );
    }
}

export default DataStructure;
