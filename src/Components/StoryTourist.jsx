/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Stories from './Stories';
import { Navigate, useNavigate } from 'react-router-dom';

const StoryTourist = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className=' flex justify-center items-center flex-col mx-auto'>
                <div className=' space-y-3'>
                    <h1 className=' font-syne text-center font-bold text-4xl'>Precious Stories </h1>
                    <p className=' font-sans text-center  text-sm text-gray-400'>This is What matters</p>
                </div>
            </div>
            <div>
                <Stories></Stories>
            </div>
            <div className=' w-full flex justify-center items-center'>
                <button onClick={() => navigate('/allStories')} className=' font-syne font-semibold text-[#065782] btn btn-outline'>More Stories</button>
            </div>
        </>
    );
}



export default StoryTourist;



// export default class StoryTourist extends Component {
//     render() {

//         const settings = {
//             className: "center",
//             centerMode: true,
//             infinite: true,
//             centerPadding: "60px",
//             slidesToShow: 3,
//             speed: 500
//         };
//         return (
//             <div className=" w-[900px] mx-auto">
//                 <h2>Center Mode</h2>
//                 <Slider {...settings}>
//                     <div className=" w-[400px] border-2 h-[200px] bg-brown-600">
//                         <h3>1</h3>
//                     </div>
//                     <div className=" w-[400px] h-[200px] bg-brown-600">
//                         <h3>2</h3>
//                     </div>
//                     <div className=" w-[400px] h-[200px] bg-brown-600">
//                         <h3>3</h3>
//                     </div>
//                     <div className=" w-[400px] h-[200px] bg-brown-600">
//                         <h3>4</h3>
//                     </div>
//                     <div className=" w-[400px] h-[200px] bg-brown-600">
//                         <h3>5</h3>
//                     </div>
//                     <div className=" w-[400px] h-[200px] bg-brown-600">
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         );
//     }
// }
// export default StoryTourist;


