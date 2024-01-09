/* eslint-disable no-unused-vars */

import UseAdmin from "../../Hooks/UseAdmin";
import UseAuth from "../../Hooks/UseAuth";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";



const Dashboard = () => {
    const { user } = UseAuth();
    const admin = UseAdmin();
    const tourist = false;
    console.log(admin);
    if (user && !admin) {
        return <UserDashboard></UserDashboard>
    }
    if (user && admin) {
        return <AdminDashboard></AdminDashboard>

    }
};

export default Dashboard;