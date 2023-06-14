import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import MyBookings from "../pages/Dashboard/MyBookings";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/EnrolledClasses.jsx/EnrolledClasses";
import PaymentHistory from "../pages/Dashboard/PaymentHistory.jsx/PaymentHistory";
import Error from "../Error/Error";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<Dashboard></Dashboard>,
        children: [
            {
                path:'mybookings',
                element: <MyBookings></MyBookings>,
            },
            {
                path:'allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'addclass',
                element: <AddClass></AddClass>

            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>

            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>

            },
            {
                path: 'payment',
                element: <Payment></Payment>,
            },
            {
                path: 'enrolledclasses',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    },
    {
        path: '*',
        element:<Error></Error>
    }
]);