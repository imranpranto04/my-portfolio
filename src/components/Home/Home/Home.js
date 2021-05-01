import React from 'react';
import About from '../About/About';
import Blog from '../Blogs/Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbars from '../Navbars/Navbars';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navbars/>
            <Header/>
            <About/>
            <Projects/>
            <Blog/>
            <Skills/>
            <Contact/>
            <Footer/>

        </div>
    );
};

export default Home;