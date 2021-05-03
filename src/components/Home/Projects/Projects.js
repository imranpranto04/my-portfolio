import React from 'react';
import car1 from '../../../images/car1.png';
import car2 from '../../../images/car2.png';
import car3 from '../../../images/car3.png';

import football1 from '../../../images/football1.png';
import football2 from '../../../images/football2.png';
import football3 from '../../../images/football3.png';

import ride1 from '../../../images/ride1.png';
import ride2 from '../../../images/ride2.png';
import ride3 from '../../../images/ride3.png';

import shop1 from '../../../images/shop1.png';
import shop2 from '../../../images/shop2.png';
import shop3 from '../../../images/shop3.png';

import ShowProject from '../ShowProject/ShowProject';

const projectData = [
    {
        name: 'Car Mechanic Service',
        img1: car1,
        img2: car2,
        img3: car3,
        description: 'This site provide information about car services. User can show which types of services this site provide. user can booking their services and this site has payment methods, so customer can easily pay their bills. In this site blogs section has some tips for users to help to keep their Vehicles in Good.',
        git: 'https://github.com/imranpranto04/car-mechanic-client',
        website: 'https://car-mechanic-d8c26.web.app/',
        technology:['React JS','Node Js','Express Js','MongoDb','Bootstrap', 'css','stripe','Firebase','Heroku'],
    },
    {
        name: 'UEFA Champions League',
        img1: football1,
        img2: football2,
        img3: football3,
        description: 'In this project we can see some club in the home page. If we want to show detailts about club we will click explore button and we will see our selected club details.',
        git: 'https://github.com/imranpranto04/football-leauge',
        website: 'https://infallible-hypatia-d55be1.netlify.app/',
        technology:['React JS','CSS','Bootstrap'],
    },
    {
        name: 'Destination Rider Service',
        img1: ride1,
        img2: ride2,
        img3: ride3,
        description: 'This site will make our journey easier. we can easily choose ride from bike,car,bus,train. Before choosing we need to signup/signIn or google mail Login in this site. After sign in we can easily choose our ride and destination and see avaiable services.',
        git: 'https://github.com/imranpranto04/destination-rider',
        website:'https://destination-rider.web.app/',
        technology:['React JS','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase'],
    },
    {
        name: 'Smart Shop Service',
        img1: shop1,
        img2: shop2,
        img3: shop3,
        description: 'This is an e-commerce site. If you visit in this site you can see many types of products. If you want to buy product you need to login first. After login you can see product details in checkout page and you can order product.',
        git: 'https://github.com/imranpranto04/smart-shop-client',
        website:'https://smart-shop-dd767.web.app/',
        technology:['React JS','Node Js','Express Js','MongoDb','CSS','Bootstrap','Firebase','Heroku'],
    }
]

const Projects = () => {
    return (
        <section id="projects" className="container-fluid">

            <div>
            <h2 className="text-center text-info">Here is some Projects</h2>
            </div>

            {/* row d-flex align-items-center */}

            <div className="d-flex justify-content-center">
                <div className=" m-4">
                    {
                        projectData.map(project => <ShowProject project={project} key={project.name}></ShowProject>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Projects;