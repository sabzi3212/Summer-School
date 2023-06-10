import React from 'react';
import Banner from '../Banner/Banner';
import Classes from '../Classes/Classes';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import About from '../About/About';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <PopularInstructors></PopularInstructors>
            <About></About>
            

            
        </div>
    );
};

export default Home;