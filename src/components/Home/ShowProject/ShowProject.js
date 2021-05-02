import React from 'react';
import './ShowProject.css';

const ShowProject = ({ project }) => {
    return (
        <div className="col-md-4 my-4">
            <div className="card m-3 h-100" style={{ width: '22rem' }}>
                <img className="img-fluid p-1" style={{ height: '200px' }} src={project.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                </div>

                <div className="card-body">
                    <a href={project.git} target="_blank" className="card-link text-decoration-none text-success"><h5>Code link</h5></a>
                    <a href={project.website} target="_blank" className="card-link text-decoration-none text-success"><h5>Website Preview link</h5></a>
                </div>
            </div>
        </div>
    );
};

export default ShowProject;