import { useEffect, useState } from 'react';
import PopularCard from './PopularCard';

const PopularInstructors = () => {

    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(()=>{
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            const popular = data.filter(item => item.category === 'popular');
            setPopularInstructors(popular);
            console.log(popular);
        })
    },[])
    return (
        <div>
             <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">Populer Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
            {
                popularInstructors.map(item => <PopularCard key={item._id} item={item}></PopularCard>)
            }
            
        </div>
        </div>
    );
};

export default PopularInstructors;