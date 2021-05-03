import React from 'react';
import car from '../../../images/car.png';
import football from '../../../images/football.png';
import ride from '../../../images/ride.png';
import shop from '../../../images/shop.png';
import ShowProject from '../ShowProject/ShowProject';

const projectData = [
    {
        name: 'Car Mechanic Service',
        img: car,
        description: 'This site provides information about car services.',
        git: 'https://github.com/imranpranto04/car-mechanic-client',
        website: 'https://car-mechanic-d8c26.web.app/',
        technology:['React JS','Node Js','Express Js','MongoDb','Bootstrap', 'css','stripe','Firebase','Heroku'],
    },
    {
        name: 'UEFA Champions League',
        img: football,
        description: 'In this project, we can see information about some clubs',
        git: 'https://github.com/imranpranto04/football-leauge',
        website: 'https://infallible-hypatia-d55be1.netlify.app/',
        technology:['React JS','CSS','Bootstrap'],
    },
    {
        name: 'Destination Rider Service',
        img: ride,
        description: 'This site will make our journey easier. On this site, we can see some riders are waiting for giving transport service.',
        git: 'https://github.com/imranpranto04/destination-rider',
        website:'https://destination-rider.web.app/',
        technology:['React JS','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase'],
    },
    {
        name: 'Smart Shop Service',
        img: shop,
        description: 'This is an e-commerce site. If you visit in this site you can see many types of products.',
        git: 'https://github.com/imranpranto04/smart-shop-client',
        website:'https://smart-shop-dd767.web.app/',
        technology:['React JS','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase','Heroku'],
    }
]

const Projects = () => {
    return (
        <section id="projects" className="container-fluid">

            <div>
            <h2 className="text-center text-white">Here is some Projects</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="row m-4">
                    {
                        projectData.map(project => <ShowProject project={project} key={project.name}></ShowProject>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Projects;