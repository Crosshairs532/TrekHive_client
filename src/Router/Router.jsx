import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PackageDetails from "../Pages/Details/PackageDetails";

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
        element: <Dashboard></Dashboard>
    }
]);

export default router;