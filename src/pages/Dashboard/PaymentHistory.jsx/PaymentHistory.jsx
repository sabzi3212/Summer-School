import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext);
    const {data: payments=[], refetch } = useQuery(['payments', user?.email], async()=>{
        const res = await fetch(`https://summer-school-server-five.vercel.app/payments?email=${user?.email}`)
        return res.json();

    })
    return (
        <div>
            <Helmet>
                <title>Summer School | Payment History</title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">Payment History</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <td>
                                #
                            </td>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>TransactionId</th>
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
                                        <div>
                                            <div className="font-bold">{item?.courseName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>${item?.price}</td>
                                <td>${item?.date}</td>
                                <td>${item?.transactionId}</td>
                                
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;