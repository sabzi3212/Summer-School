import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    // const isAdmin = true;
    const [isAdmin] = UseAdmin();
    // const isInstructor = false;
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-orange-200 text-base-content">

                   {
                    isAdmin ? 
                    <>
                    <li><Link>Manage Classes</Link></li>
                    <li><Link to='/dashboard/allusers'>Manage Users</Link></li>
                    
                    
                    </> 
                    :

                    isInstructor ? 
                    <>
                    <li><Link>Add a class</Link></li>
                    <li><Link>My classes</Link></li>
                    
                    </>
                    :
                    <>
                    <li><Link to='/dashboard/mybookings'>My Selected Class</Link></li>
                    <li><Link>My Enrolled Class</Link></li>
                    <li><Link>Payment History</Link></li>
                    
                    
                    
                    </>

                   }
                   <li><Link to='/'>Home</Link></li>
                    
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;