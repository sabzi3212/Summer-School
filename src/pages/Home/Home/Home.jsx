import React from 'react';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import About from '../About/About';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Summer School | Home</title>
            </Helmet>
            <Banner></Banner>
            <Classes></Classes>
            <PopularInstructors></PopularInstructors>
            <About></About>
            

            
        </div>
    );
};

export default Home;