/* eslint-disable no-unused-vars */
import { AiFillAccountBook } from "react-icons/ai";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CiBoxList, CiUser } from "react-icons/ci";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { GiAxeSwing } from "react-icons/gi";
import { RiMenu2Line } from "react-icons/ri";

const UserDashboard = () => {
    const { logOut } = UseAuth();
    const Goto = useNavigate();

    const handleLogout = () => {

        logOut()
            .then((res) => {

                Swal.close();
                Swal.fire({
                    icon: 'success',
                    title: 'Logged out successfully',
                });
                Goto('/')
            })
    }


    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn absolute top-3 left-4 bg-[#011621] text-gray-200 drawer-button lg:hidden"><RiMenu2Line />
                    </label>
                    <div className="  w-full h-full p-4">
                        <Outlet></Outlet>
                    </div>

                </div>
                <div className="drawer-side shadow-xl">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className=" menu flex flex-col bg-[white] justify-center items-center overflow-hidden w-72  p-4 side-bar min-h-full ">
                        <div className=" absolute top-4">
                            <div> <h1 className=" flex items-center  font-syne gap-2 text-4xl"><GiAxeSwing size={50}></GiAxeSwing>TrekHive </h1></div>
                        </div>
                        <div className=" flex flex-col gap-4">
                            <li className=" font-syne text-xl"><NavLink to='/dashboard/profile'><CiUser></CiUser><h1>MY Profile</h1></NavLink></li>
                            <li className=" font-syne text-xl"><NavLink to='/dashboard/bookings'><AiFillAccountBook></AiFillAccountBook><h1>booking</h1></NavLink></li>
                            <li className=" font-syne text-xl"><NavLink to='/dashboard/wishlist'><CiBoxList></CiBoxList><h1>wishlist</h1></NavLink></li>
                            <li className=" font-syne text-xl"><NavLink to='/'><CiBoxList></CiBoxList><h1>Home</h1></NavLink></li>
                        </div>
                        <div className=" w-full flex justify-center items-center fixed z-30 left-0 bottom-0 h-[60px] bg-[#011621]">
                            <button onClick={handleLogout} className=" btn outline-none bg-transparent"><h1 className=" text-blue-gray-100 font-syne text-xl">logout</h1></button>
                        </div>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default UserDashboard;