import React, {Component} from 'react';
import Navigation from '../Navigation/Navigation';

import './About.css';

class About extends Component {
    render() {
        return (
            <div className="container about">
                <Navigation />
                <div className="row justify-content-center align-items-center mt-lg-5">
                    <div className="col-12 col-lg-6">
                        <h2 className="text-white">About</h2>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla cursus nec eros in dictum. Curabitur
                            ultrices at nulla in elementum. Suspendisse pulvinar
                             commodo volutpat. Vivamus fringilla dui ut dui
                             congue fermentum. Ut eleifend mi leo. Integer
                             dapibus arcu nec risus tempus luctus. Vivamus
                             suscipit magna non quam suscipit, consequat
                             eleifend magna ornare.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">

                    </div>
                </div>
            </div>
        );
    }
}

export default About;
