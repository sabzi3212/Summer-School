import React from 'react';

const PopularCard = ({item}) => {
    const {name, email, image, class_name
    } = item;
    return (
        <div className="card w-96 glass">
            <figure><img className='h-[300px] w-[400px]' src={image} alt="car!" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p className="card-title">Email: {email}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-orange-300 mt-5">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;