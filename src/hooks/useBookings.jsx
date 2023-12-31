import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useBookings = () =>{
    const {user} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        // queryFn: async ()=>{
        //     const response = await fetch(`https://summer-school-server-five.vercel.app/bookings?email=${user?.email}`, {
        //         headers: {
        //             authorization : `bearer ${token}`
        //         }
        //     })
        //     return response.json();
        // },
        queryFn: async ()=>{
            const response = await axiosSecure(`/bookings?email=${user?.email}`)
            console.log('res from axios', response)
            return response.data;
        },
      })

      return [bookings, refetch, isLoading]
}
export default useBookings;