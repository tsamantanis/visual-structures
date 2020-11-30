import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar bg="none" expand="lg" className="nav">
            <Navbar.Brand />
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Link to="/" className="text-light-blue mr-2">Home</Link>
                    <Link to="/about" className="text-light-blue mr-2">About</Link>
                    <Link to="/contact" className="text-light-blue">Contact</Link>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    );
};

export default Navigation;
