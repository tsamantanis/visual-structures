import React, {Component} from 'react';

class TitleCard extends Component {
    render() {
        return (
            <div className={"card titleCard rounded mb-5 pt-2 pb-1 card-" + this.props.color}>
                <div className="row align-items-center">
                    <div className="col-12 pl-4">
                        <h3>{this.props.title}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleCard;
