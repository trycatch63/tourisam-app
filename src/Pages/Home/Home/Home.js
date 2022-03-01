import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Packages from '../../Packages/Packages';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;