import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useBookings from '../../hooks/useBookings';

const AllClassesCard = ({item}) => {
    const {_id,name, course, courseImg, price, availableSeats} = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useBookings();
    const navigate = useNavigate();
    const location = useLocation();
    const handleBookNow = item =>{
        console.log('item clicked', item);
        if(user){
            const bookedItem = {classId: _id, name, course, courseImg, price, email: user?.email}
            fetch('https://summer-school-server-five.vercel.app/bookings', {
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(bookedItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'class booked Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to book this class',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    navigate('/login', {state: {from: location}})
                  )
                }
              })
        }

    }
    return (
        <div className="card w-96 glass">
            <figure><img className='h-[300px] w-[400px]' src={courseImg} alt="car!" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title">Name: {course}</h2>
                <p className="card-title">Instructor: {name}</p>
                <p className="card-title">Price: ${price}</p>
                <p className="card-title">Seats Left: {availableSeats}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleBookNow(item)} className="btn bg-orange-300 mt-5">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllClassesCard;