import React from 'react';
import './ShowProject.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGitSquare } from '@fortawesome/free-brands-svg-icons';


const ShowProject = ({ project }) => {

    const { name, git, website, img1, img2, img3, description, technology } = project;

    return (

        <div className="container-fluid">

            <div className="row my-5 d-flex align-items-center">

                <div className="col-md-6 showProjects">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 img-fluid"
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className="col-md-6 text-white">
                    <h4 className="text-danger mt-3"> <b>{name}</b></h4>
                    <p>{description}</p>
                    
                   <div className="row">
                   {
                        technology.map(technology=> <div className="row m-2 d-flex align-items-center col-md-3">
                            <button type="button" class="btn btn-outline-success"><strong>{technology}</strong></button>
                        </div>)
                    }
                   </div>

                   <div className="row d-block my-3 preview container">
                        <a target="blank"  href={website}><FontAwesomeIcon className="icon" icon={faChrome} /> Website Preview</a>

                        <a target="blank" href={git}><FontAwesomeIcon className="icon"  icon={faGitSquare} /> Github Code</a>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default ShowProject;