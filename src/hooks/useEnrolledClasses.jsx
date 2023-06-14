import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useEnrolledClasses = () => {
    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: payments = [] } = useQuery({
        queryKey: ['payment', user?.email],
        // queryFn: async ()=>{
        //     const response = await fetch(`https://summer-school-server-five.vercel.app/bookings?email=${user?.email}`, {
        //         headers: {
        //             authorization : `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },
        queryFn: async ()=>{
            const response = await axiosSecure(`/payments?email=${user?.email}`)
            console.log('res from axios', response)
            return response.data;
        },
      })

      return [payments, refetch, isLoading]
};

export default useEnrolledClasses;