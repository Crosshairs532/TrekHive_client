/* eslint-disable no-unused-vars */

import UserDashboard from "./UserDashboard";



const Dashboard = () => {
    const user = true;
    const admin = false;
    const tourist = false;
    if (user && !admin) {
        return <UserDashboard></UserDashboard>
    }
};

export default Dashboard;