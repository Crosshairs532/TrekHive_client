/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const StoryTourist = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        console.log(swiper);
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <>
            <div className=' flex justify-center items-center flex-col mx-auto border-2'>
                <div className=' space-y-3'>
                    <h1 className=' font-syne text-center font-bold text-4xl'>Precious Stories </h1>
                    <p className=' font-sans text-center  text-sm text-gray-400'>This is What matters</p>
                </div>
            </div>
            <div>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper1"
                    slidesPerView={3}
                    centeredSlides={1}
                    spaceBetween={20}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {[...Array(9)].map((_, index) => (
                        <SwiperSlide key={index} >
                            <div className={`  text-black duration-300 w-[400px] bg-[#d2d2d2cd] h-[300px] ${activeIndex === index ? 'active-slide' : ''}`}>
                                Slide {index}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
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


