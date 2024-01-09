/* eslint-disable no-unused-vars */

import UseAdmin from "../../Hooks/UseAdmin";
import UseAuth from "../../Hooks/UseAuth";
import useTourGuide from "../../Hooks/useTourGuide";
import AdminDashboard from "./AdminDashboard";
import GuideDashboard from "./Guide/GuideDashboard";
import UserDashboard from "./UserDashboard";



const Dashboard = () => {
    const { user } = UseAuth();
    const admin = UseAdmin();
    const tourist = useTourGuide();
    console.log(admin);
    console.log(tourist);
    if (user && !admin && !tourist) {
        return <UserDashboard></UserDashboard>
    }
    if (user && admin) {
        return <AdminDashboard></AdminDashboard>
    }

    if (user && tourist) {
        return <GuideDashboard></GuideDashboard>
    }
};

export default Dashboard;