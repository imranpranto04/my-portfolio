import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const Footer = () => {
    return (
        <section className="mt-5 footer">
            <div className="icon d-flex justify-content-center">

                <a target="blank" href="https://www.linkedin.com/in/imran-hosen/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>

                <a target="blank" href="https://github.com/imranpranto04"><FontAwesomeIcon className="icon" size="2x" icon={faGitSquare} /></a>

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