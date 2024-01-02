import Footer from "../Components/Footer";

import { Outlet } from 'react-router-dom'
import { NavBar } from "../Components/Navbar";
const Layout = () => {
    return (
        <div>
            <div className="">
                <NavBar></NavBar>
            </div>
            {/* <div>
                <Slider></Slider>
            </div> */}
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;