import React from 'react';
import useBookings from '../../hooks/useBookings';
import { Helmet } from 'react-helmet-async';

const MyBookings = () => {
    const [bookings] = useBookings();
    return (
        <div>
            <Helmet>
                <title>Summer School | My Boookings</title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">View your booked classes : {bookings.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <td>
          #
        </td>
        <th>Course Name</th>
        <th>Instructor Name</th>
        <th>Price</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map( (item, index) => <tr key={item._id}>
            <td>
              {index + 1}
            </td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-14 h-14">
                    <img src={item?.courseImg} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item?.course}</div>
                </div>
              </div>
            </td>
            <td>
              {item?.name}
              <br/>
            </td>
            <td>${item?.price}</td>
            <td>
              <button className="btn btn-ghost btn-xs">Delete</button>
            </td>
            <td>
              <button className="btn btn-ghost btn-xs">Pay</button>
            </td>
          </tr>)
      }
      
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default MyBookings;