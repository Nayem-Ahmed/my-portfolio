import React from 'react';
import Banner from './Banner';
import Services from './Services';
import ContactHome from './ContactHome';
import Skill from './Skill';
import Portfolio from './Portfolio';
 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactHome></ContactHome>
            <Skill></Skill>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;