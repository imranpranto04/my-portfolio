import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css';

const Navbars = () => {
    return (

        <div className="container">
            <Navbar style={{ backgroundColor: ''}} expand="lg">
                <Navbar.Brand className="text-white" href="#home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav">
                        {/* <li><Link style={{ textDecoration: 'none', color: 'white' }} Link to="/home">Home</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} Link to="/about">About Me</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'white' }} link to="/projects">Projects</Link></li> */}

                        {/* <li><Link style={{ textDecoration: 'none', color: 'white' }} Link to="/blogs">Blogs</Link></li> */}

                        <li><a style={{ textDecoration: 'none', color: 'white' }} href="#home">Home</a></li>

                        <li><a style={{ textDecoration: 'none', color: 'white' }} href="#about">About Me</a></li>

                        <li><a style={{ textDecoration: 'none', color: 'white' }} href="#projects">Projects</a></li>

                        <li><a style={{ textDecoration: 'none', color: 'white' }} href="#blogs">Blogs</a></li>

                        <li><a style={{ textDecoration: 'none', color: 'white' }} href="#skills">Skills</a></li>

                        <li><a style={{ textDecoration: 'none', color: 'white' }} href="#contact">Contact</a></li>

                        {/* <li> <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">Contact</Link></li> */}

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbars;