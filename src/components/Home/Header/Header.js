import React from 'react';
import pranto1 from '../../../images/pranto1.png';
import { useSpring, animated } from 'react-spring'


const Header = () => {

    const styles = useSpring({
        loop: true,
        delay: 700,
        to: [
          { opacity: 1, color: 'tomato' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })

    return (
        <section className="container mt-5">
            <div className="row d-flex align-items-center text-white">

                <div className="col-md-6">
                    <h1>Imran Hosen</h1>
                    <animated.h4 style={styles}>Junior Web Developer</animated.h4>

                    <button className="btn btn-success mt-4"><a className="text-white text-decoration-none" target="_blank" href="https://drive.google.com/uc?export=download&id=1vE4xz3WiDBS22wSv2PpYPUlr6mHBexHv">Download Resume</a></button>

                </div>

                <div className="col-md-6">
                    <img className="img-fluid" src={pranto1} alt=""/>
                </div>
 
            </div>
            
        </section>
    );
};

export default Header;