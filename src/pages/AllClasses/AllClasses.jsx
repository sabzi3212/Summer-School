import React from 'react';
import useInstructors from '../../hooks/UseInstructors';
import AllClassesCard from './AllClassesCard';
import { Helmet } from 'react-helmet-async';

const AllClasses = () => {
    const [classes] = useInstructors();
    return (
        <div>
            <Helmet>
                <title>
                   Summer School | Classes
                </title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8"> Classes We Offer</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {
                classes.map(item => <AllClassesCard key={item._id} item={item}></AllClassesCard>)
            }
            
        </div>

            
        </div>
    );
};

export default AllClasses;