import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBookings = () =>{
    const {user} = useContext(AuthContext);

    const { isLoading, refetch, data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            return response.json();
        },
      })

      return [bookings, refetch, isLoading]
}
export default useBookings;