/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { ThreeDots } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, isLoading } = UseAuth();
    console.log('im in', location.pathname)

    if (isLoading) {

        return <div className=' min-h-screen flex justify-center items-center'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    if (user) {
        return children
    }
    <Navigate state={location.pathname} to='/login' replace></Navigate>

};

export default PrivateRoute;