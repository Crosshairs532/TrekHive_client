import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

import PackageDetails from "../Pages/Details/PackageDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TouristProfile from "../Pages/Dashboard/TouristProfile";
import TouristWishlist from "../Pages/Dashboard/TouristWishlist";
import TouristBookings from '../Pages/Dashboard/TouristBookings';
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },

            {
                path: '/ourPackages/details/:id',
                element: <PackageDetails></PackageDetails>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>

    },
    {

        path: '/signIn',
        element: <Registration></Registration>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // tourist
            {
                path: '/dashboard/profile',
                element: <PrivateRoute><TouristProfile></TouristProfile></PrivateRoute>
            },
            {
                path: '/dashboard/bookings',
                element: <PrivateRoute><TouristBookings></TouristBookings></PrivateRoute>
            },
            {
                path: '/dashboard/wishlist',
                element: <PrivateRoute><TouristWishlist></TouristWishlist></PrivateRoute>
            }


            // admin

        ]
    }
]);

export default router;