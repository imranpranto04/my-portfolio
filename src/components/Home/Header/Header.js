import React from 'react';
import pranto1 from '../../../images/pranto1.png';

const Header = () => {
    return (
        <section className="container mt-5">
            <div className="row d-flex align-items-center text-white">

                <div className="col-md-6">
                    <h1>Imran Hosen</h1>
                    <h4>Junior Web Developer</h4>

                    <button className="btn btn-success mt-4"><a className="text-white text-decoration-none" target="_blank" href="https://drive.google.com/uc?export=download&id=1GIFfH2Zxoqr4btaShfJtOf3X4Jt_e5io">Download Resume</a></button>

                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={pranto1} alt=""/>
                </div>
 
            </div>
            
        </section>
    );
};

export default Header;