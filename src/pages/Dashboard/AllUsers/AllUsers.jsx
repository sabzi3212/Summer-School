import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data: users=[], refetch } = useQuery(['users'], async()=>{
        const res = await fetch('https://summer-school-server-five.vercel.app/users')
        return res.json();

    })

    const handleMakeAdmin = user =>{
        fetch(`https://summer-school-server-five.vercel.app/users/admin/${user._id}`,{
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
                    title: `${user?.name} is now an admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://summer-school-server-five.vercel.app/users/instructor/${user._id}`,{
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
                    title: `${user?.name} is now an instructor`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Summer School | My Boookings</title>
            </Helmet>
            <h1 className="text-3xl text-center text-orange-300 mb-8 mt-8">View all users : {users.length}</h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>

      {
        users.map( (user, index) => <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{
                user.role === 'admin'? 'admin' : <button onClick={()=> handleMakeAdmin(user)} className="btn btn-ghost btn-xs">Make Admin</button>
                }</td>
            <td>
                {
                    user.role === 'instructor' ? 'instructor' : <button onClick={()=> handleMakeInstructor(user)} className="btn btn-ghost btn-xs">Make Instructor</button>
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

export default AllUsers;