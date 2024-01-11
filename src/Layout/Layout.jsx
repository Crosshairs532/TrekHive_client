import Footer from "../Components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from 'react-router-dom'
import { NavBar } from "../Components/Navbar";
import '../index.css'
const Layout = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div>
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div className=" static top-0 z-20">
                <NavBar></NavBar>
            </div>

            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;