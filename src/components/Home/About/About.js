import React from 'react';
import pranto2 from '../../../images/pranto2.png';

const About = () => {
    return (
        <section id="about" className="container mt-5">
            <h3 className="text-center text-white">About Me</h3>

            <div className="row d-flex align-items-center my-5">
                <div className="col-md-6">
                    <img className="img-fluid" src={pranto2} alt=""/>
                </div>

                <div className="col-md-6">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis laudantium, neque quibusdam autem tenetur sunt!</p>
                </div>
            </div>
        </section>
    );
};

export default About;