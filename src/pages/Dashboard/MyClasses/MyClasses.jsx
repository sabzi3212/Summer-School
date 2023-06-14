import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import useClasses from '../../../hooks/useClasses';

const MyClasses = () => {
    const [classes] = useClasses();
    return (
        <div>
            <Helmet>
                    <title>Summer School | My Classes</title>

            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">My Classes: {classes.length}</h1>
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
                            <th>Staus</th>
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
                                <td>${item?.price}</td>
                                <td>{item?.status}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Feedback</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;