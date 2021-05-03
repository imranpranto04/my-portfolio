import React from 'react';
import './About.css';
import pranto2 from '../../../images/pranto2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGitSquare } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <section id="about" className="container mt-5">
            <h2 className="text-center text-white">About Me</h2>

            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6">
                    <img className="img-fluid" src={pranto2} alt="" />
                </div>

                <div className="col-md-6 text-white">
                    <div className="details">
                        <p>I am currently working on web development.I have completed my B.Sc. program in CSE at Daffodil International University. As long I work with web development, my interest in this field is growing. I am working hard to do well in this sector and learn very well about web development.</p>
                    </div>

                    <div className="skillBox mt-4">
                        <h4 className="text-center mb-5">My skills:</h4>
                        <p>
                            ⦿ Comfortable with: Javascript, ES6, React js, Node js, Express, MongoDB,
                            Bootstrap, HTML, CSS.
                        </p>
                        <p>
                            ⦿ Familiar with: React Native, Firebase, Material UI, Stripe, Heroku, Netlify, React-spring.
                        </p>
                        <p>⦿ Tools: Git, Chrome DevTools, VS code.</p>
                    </div>

                    <div className="myIcon d-flex justify-content-center mt-3">

                        <a target="blank" href="https://www.linkedin.com/in/imran-hosen/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>

                        <a target="blank " href="https://github.com/imranpranto04"><FontAwesomeIcon className="icon" size="3x" icon={faGitSquare} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;