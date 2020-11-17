import React, {Component} from 'react';
import TitleCard from '../Helpers/TitleCard';
class DataStructure extends Component {
    render() {
        return (
            this.props.dataStructures.map((structure) => {
                return (
                    <div className="row mt-5">
                        <div className="col-12 col-lg-4">
                            <TitleCard
                                title={structure.title}
                                color={structure.color}
                            />
                        </div>
                        <div className="col-12 col-lg-8 text-white text-center">
                            GRID
                        </div>
                    </div>
                );
            })

        );
    }
}

export default DataStructure;
