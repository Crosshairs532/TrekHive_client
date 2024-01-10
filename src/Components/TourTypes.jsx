import hiking from '../assets/hiking.jpeg';
import air from '../assets/air.jpeg';
import sports from '../assets/sports.jpeg';
import wildlife from '../assets/wildlife.jpeg';
import { Link } from 'react-router-dom';

const TourTypes = () => {



    return (
        <div className=' '>
            <h1 className=" font-syne guide overflow-hidden relative text-xl lg:text-4xl font-bold ">Types of Tour we Offer</h1>
            <div className=' mt-[6%] '>
                <div className=" grid lg:grid-cols-4 gap-y-2 md:grid-cols-2 grid-cols-1 place-items-center">
                    <Link to={'/tourtypes/hiking'}>
                        <div className=" tour-type cursor-pointer group relative overflow-hidden w-[300px] h-[400px] ">
                            <img className=' group-hover:scale-125 duration-500 w-full h-[400px] object-cover' src={hiking} alt="" />
                            <div className=" px-2 flex text-[#e4e4e4] font-syne items-center justify-between z-10 bg-[#ffffff0e] backdrop-blur-[7px] w-full h-[70px] bottom-0 left-0 absolute">
                                <p className=' text-xl font-extrabold font-DS'>Hiking</p>
                                <button className=' outline px-1 py-2 outline-blue-gray-100'>view more</button>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/tourtypes/air'}>
                        <div className=" tour-type group cursor-pointer  overflow-hidden w-[300px] h-[400px] relative">
                            <img className=' group-hover:scale-125 duration-500 w-full h-[400px] object-cover' src={air} alt="" />
                            <div className=" px-2 flex text-[#e4e4e4] font-syne items-center justify-between z-10 bg-[#ffffff0e] backdrop-blur-[7px] w-full h-[70px] bottom-0 left-0 absolute">
                                <p className=' text-xl font-extrabold font-DS'>Air</p>
                                <button className=' outline px-1 py-2 outline-blue-gray-100'>view more</button>
                            </div>
                        </div></Link>
                    <Link to='/tourtypes/wildlife'>
                        <div className=" tour-type group cursor-pointer  overflow-hidden w-[300px] h-[400px] relative">
                            <img className=' group-hover:scale-125 duration-500 w-full h-[400px] object-cover' src={wildlife} alt="" />
                            <div className=" px-2 flex text-[#e4e4e4] font-syne items-center justify-between z-10 bg-[#ffffff0e] backdrop-blur-[7px] w-full h-[70px] bottom-0 left-0 absolute">
                                <p className=' text-xl font-extrabold font-DS'>WildLife</p>
                                <button className=' outline px-1 py-2 outline-blue-gray-100'>view more</button>
                            </div>
                        </div>
                    </Link>
                    <Link to={'/tourtypes/sports'}>

                        <div className=" tour-type group cursor-pointer  overflow-hidden w-[300px] h-[400px] relative">
                            <img className=' group-hover:scale-125 duration-500 w-full h-[400px] object-cover' src={sports} alt="" />
                            <div className=" px-2 flex text-[#e4e4e4] font-syne items-center justify-between z-10 bg-[#ffffff0e] backdrop-blur-[7px] w-full h-[70px] bottom-0 left-0 absolute">
                                <p className=' text-xl font-extrabold font-DS'>Sports</p>
                                <button className=' outline px-1 py-2 outline-blue-gray-100'>view more</button>
                            </div>
                        </div>

                    </Link>

                </div>
            </div>

        </div>
    );
};

export default TourTypes;