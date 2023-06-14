import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { useState } from 'react';

const ManageClasses = () => {
    const {data: classes=[], refetch } = useQuery(['class'], async()=>{
        const res = await fetch('https://summer-school-server-five.vercel.app/class')
        return res.json();

    })

    const [disabled, setDisabled] = useState(false);

    const handleMakeApprove = item =>{
        fetch(`https://summer-school-server-five.vercel.app/class/approve/${item._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${item?.course} is now approved`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeDeny = item =>{
        fetch(`https://summer-school-server-five.vercel.app/class/deny/${item._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${item?.course} is Denied`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>

            <Helmet>
                <title>Summer School | All Classes</title>

            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">All Classes: {classes.length}</h1>
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
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Staus</th>
                            <th>Action</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, index) => <tr key={item._id}>
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
                                    <br />
                                </td>
                                <td>
                                    {item?.email}
                                    <br />
                                </td>
                                <td>
                                    {item?.availableSeats}
                                    <br />
                                </td>
                                <td>${item?.price}</td>
                                <td>{item?.status}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Feedback</button>
                                </td>
                                <td>
                                    {
                                        classes.status === 'approved' ? 'approved' : <button onClick={() => handleMakeApprove(item)} className="btn btn-ghost btn-xs">Approve</button>
                                    }
                                </td>
                                <td>
                                {
                                        classes.status === 'denied' ? 'denied' : <button onClick={() => handleMakeDeny(item)} className="btn btn-ghost btn-xs">Deny</button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageClasses;