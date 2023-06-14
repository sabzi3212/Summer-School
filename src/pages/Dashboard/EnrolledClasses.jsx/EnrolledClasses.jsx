import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import useEnrolledClasses from '../../../hooks/useEnrolledClasses';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {
    const {user} = useContext(AuthContext);
    const {data: payments=[], refetch } = useQuery(['payments', user?.email], async()=>{
        const res = await fetch(`https://summer-school-server-five.vercel.app/payments?email=${user?.email}`)
        return res.json();

    })
    return (
        <div>
            <Helmet>
                <title>Summer School | My Enrolled Classes</title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">View your enrolled classes : {payments.length}</h1>

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
                            payments.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-14 h-14">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item?.courseName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                    <br />
                                </td>
                                <td>${item?.price}</td>
                                
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default EnrolledClasses;