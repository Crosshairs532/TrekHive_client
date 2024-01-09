/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import Loaading from "../Loading/Loaading";


const AdminPrivate = ({ children }) => {
    const { user, isLoading } = UseAuth();
    const isAdmin = UseAdmin();
    const location = useLocation();

    if (isLoading) {
        return <Loaading></Loaading>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate state={location.pathname} replace ></Navigate>
};

export default AdminPrivate;