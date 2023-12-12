import React from 'react';
import Banner from './Banner';
import Services from './Services';
import ContactHome from './ContactHome';
import Skill from './Skill';
 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactHome></ContactHome>
            <Skill></Skill>
        </div>
    );
};

export default Home;