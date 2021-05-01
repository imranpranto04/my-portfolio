import React from 'react';
import pranto1 from '../../../images/pranto1.png';

const Header = () => {
    return (
        <section className="container mt-5">
            <div className="row d-flex align-items-center text-white">

                <div className="col-md-6">
                    <h1>Here is my details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error omnis neque molestiae! Excepturi, obcaecati!</p>

                    <button className="btn btn-success"><a className="text-white text-decoration-none" target="_blank" href="https://drive.google.com/uc?export=download&id=1GIFfH2Zxoqr4btaShfJtOf3X4Jt_e5io">Download Resume</a></button>

                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={pranto1} alt=""/>
                </div>
 
            </div>
            
        </section>
    );
};

export default Header;