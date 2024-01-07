/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { GiAxeSwing } from "react-icons/gi";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    MobileNav,

} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

export function NavBar() {
    const { user, logOut } = UseAuth();
    const [openNav, setOpenNav] = useState(false);
    const Goto = useNavigate();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 font-syne flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="h6"
                className="p-1  text-[#efeff9] relative font-bold  font-syne"
            >
                <Link className=" nav-item">Home</Link>
            </Typography>
            <Typography
                as="li"
                variant="h6"

                className="p-1 text-[#efeff9] relative nav-item font-bold font-syne"
            >
                <Link className=" nav-item">Community</Link>
            </Typography>
            <Typography
                as="li"
                variant="h6"

                className="p-1 text-[#efeff9] relative font-bold font-syne"
            >
                <Link className=" nav-item ">Blogs</Link>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-[#efeff9] relative font-bold font-syne"
            >
                <Link className=" nav-item">About Us</Link>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-[#efeff9] relative font-bold font-syne"
            >

                <Link className=" nav-item">Contact Us</Link>

            </Typography>
        </ul>
    );
    console.log(
        openNav);


    const handleLogout = () => {
        // Swal.fire({
        //     title: 'Logging out...',
        //     allowOutsideClick: false,
        //     showConfirmButton: false,
        //     willOpen: () => {
        //         Swal.showLoading();
        //     },
        // });
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
        <div className=" z-20 bg-transparent w-[100vw] absolute outline-none border-none ">
            <Navbar withBorder={false} className={` max-w-full outline-none bg-[#00000010] rounded-none px-4 py-2 lg:px-8 lg:py-4`}>
                <div className="flex max-w-6xl outline-none mx-auto items-center justify-between">
                    <div className=" flex justify-center items-center logo w-[80px] h-[80px]  ">
                        <button className=" cursor-pointer">
                            <h1 className=" text-5xl"><GiAxeSwing></GiAxeSwing></h1>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden  lg:block">
                            {navList}
                        </div>
                        <div >
                            {user ?
                                <div className="dropdown w-auto lg:block hidden md:hidden dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="profile picture" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu  menu-sm text-[black] dropdown-content mt-3 z-[1] p-2 shadow  backdrop-blur-sm bg-[#ffffff42] rounded-box w-52">

                                        <Link to={'/dashboard'}> <li>Dashboard</li></Link>
                                        <li onClick={handleLogout} ><a>Logout</a></li>
                                        <li><p>Email:{user?.email}</p></li>
                                    </ul>
                                </div>

                                :

                                <div className="flex relative items-center justify-center gap-x-4">
                                    <Link to={'/login'}>    <button
                                        className="hidden rounded-xl z-10 px-3 py-2 login-btn  lg:inline-block"
                                    >
                                        <span className=" z-20 log-color">Log In</span>
                                    </button></Link>
                                    <Link to={'/signIn'}>  <button
                                        size="sm"
                                        className="hidden rounded-xl  px-3 py-2 signin-btn lg:inline-block"
                                    >
                                        <span className=" sign-color">Sign in</span>
                                    </button></Link>

                                </div>

                            }
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav className="" open={openNav}>
                    {navList}
                    <ul>
                        <Link to={'/dashboard'}> <li>Dashboard</li></Link>
                    </ul>
                    {
                        user ?
                            <>
                                <div className=" flex justify-between ">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="profile picture" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <button onClick={handleLogout} className=" btn font-syne">Logout</button>
                                </div>
                            </>
                            : <div className="flex items-center gap-x-1">
                                <Link to={'/login'}>
                                    <Button fullWidth variant="text" size="sm" className="">
                                        <span>Log In</span>
                                    </Button>
                                </Link>
                                <Link to={'/signIn'}> <Button fullWidth variant="gradient" size="sm" className="">
                                    <span>Sign in</span>
                                </Button> </Link>

                            </div>
                    }
                </MobileNav>
            </Navbar>

        </div>
    );
}