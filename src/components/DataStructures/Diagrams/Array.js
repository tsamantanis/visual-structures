import React, {Component} from 'react';
import squares from '../../Helpers/squares';
const array = [
    1,
    2,
    3,
    4,
    5,
    6
];

class Array extends Component {
    render() {
        console.log(squares)
        return (
            array.map((item, i) => {
                return (
                    <img
                        key={i}
                        src={squares[array.length - 1 - i]}
                        className="isometric-square img-fluid"
                        alt="Isometric square"
                    />
                );
            })
        );
    }
}

export default Array;