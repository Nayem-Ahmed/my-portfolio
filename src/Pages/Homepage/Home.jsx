import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Contact from '../Contact';
import ContactHome from './ContactHome';
 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactHome></ContactHome>
        </div>
    );
};

export default Home;