import React, { Component } from "react";
import squares from "../../Helpers/squares";
const array = [1, 2, 3, 4, 5, 6];

class Array extends Component {
    render() {
        return array.map((item, i) => {
            return (
                <div className="array-item" key={i}>
                    <span className="array-index text-uppercase mr-lg-3 text-turquoise">
                        {"Index: " + (array.length - 1 - i)}
                    </span>
                    <img
                        key={i}
                        src={squares[array.length - 1 - i]}
                        className="isometric-square img-fluid"
                        alt="Isometric square"
                    />
                </div>
            );
        });
    }
}

export default Array;
