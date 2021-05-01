import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        // <section classNameNameName="container mt-5">
        //     <div classNameNameName="text-center text-white">
        //         <h2>Skills</h2>
        //     </div>
        <section id="skills" className="container d-flex justify-content-center mt-100">
            
               
            
        <div className="row">
        <h2 className="text-center text-white">Skills</h2>
            <div className="col-md-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">My Skills</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">HTML<span className="float-right"> 80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "80%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">CSS<span className="float-right"> 70%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Bootstrap<span className="float-right"> 70%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Javascript<span className="float-right"> 60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">React<span className="float-right"> 65%</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
              
        </div>
    </section>
    );
};

export default Skills;