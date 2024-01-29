import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PackageDetails from "../Pages/Details/PackageDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from '../Pages/Dashboard/Profile';
import TouristWishlist from "../Pages/Dashboard/TouristWishlist";
import TouristBookings from '../Pages/Dashboard/TouristBookings';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminPrivate from "../PrivateRoute/AdminPrivate";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import GuideDetails from "../Pages/GuideDetails";
import AllTourTypes from "../Components/AllTourTypes";
import StoryDetails from "../Components/StoryDetails";
// import Allpackges from "../Pages/AllPackages/Allpackges";


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
            },
            {
                path: '/guides/details/:id',
                element: <GuideDetails></GuideDetails>

            }
            ,
            {
                path: '/tourtypes/:type',
                element: <AllTourTypes></AllTourTypes>
            }
            ,
            {
                path: '/tour_story/:storyGiverName/:id',
                element: <StoryDetails></StoryDetails>
            }

            // {
            //     path: '/allpackges',
            //     element: <Allpackges></Allpackges>
            // }
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
                element: <Profile></Profile>
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
            ,
            {
                path: '/dashboard/admin/addPackage',
                element: <AdminPrivate><AddPackage></AddPackage></AdminPrivate>
            },
            {
                path: '/dashboard/admin/users',
                element: <AdminPrivate><ManageUsers></ManageUsers></AdminPrivate>
            }

        ]
    }
]);

export default router;