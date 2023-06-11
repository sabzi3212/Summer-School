import React from 'react';

const AllClassesCard = ({item}) => {
    const {name, course, courseImg, price, availableSeats} = item;
    return (
        <div className="card w-96 glass">
            <figure><img className='h-[300px] w-[400px]' src={courseImg} alt="car!" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title">Name: {course}</h2>
                <p className="card-title">Instructor: {name}</p>
                <p className="card-title">Price: ${price}</p>
                <p className="card-title">Seats Left: {availableSeats}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-orange-300 mt-5">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;