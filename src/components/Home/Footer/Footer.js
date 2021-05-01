import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => {
    return (
        <section className="my-5">
            <div className="icon d-flex justify-content-center">
                    <a target="blank" href="https://www.google.com/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>

                    <a target="blank " href="https://www.google.com/"><FontAwesomeIcon className="icon" size="3x" icon={faGitSquare} /></a>

                </div>
                <div className="text-center text-white">
                    <h5>imranh.pranto@gmail.com</h5>
                    <p>Dhaka, Bangladesh</p>
                    <small>©2021, All rights reserved Imran Hosen.</small>
                </div>
        </section>
    );
};

export default Footer;