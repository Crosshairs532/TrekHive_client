/* eslint-disable react/prop-types */
import { Suspense, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link, useLocation } from 'react-router-dom';
import UseStories from '../Hooks/UseStories';
import Loaading from '../Loading/Loaading';

const Stories = () => {
    // const location = useLocation();

    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideChange = (swiper) => {
        console.log(swiper);
        setActiveIndex(swiper.activeIndex);
    };
    const stories = UseStories();
    console.log(stories);
    return (
        // <Suspense fallback={<h1 className=' text-7xl'>loadinggg.....</h1>}>
        <Swiper
            // pagination={{
            //     type: 'fraction',
            // }}
            navigation={true}
            modules={[Navigation]}
            // Pagination,
            className=" mySwiper1 "
            slidesPerView={3}
            centeredSlides={1}
            spaceBetween={20}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
        >

            {stories?.map((story, index) => (
                <SwiperSlide className=' TourStory' key={index} >
                    {/* <Link to={`/${}/${}`}> */}
                    <div className={` px-4 py-2  text-black duration-300 w-auto bg-[#f1f3fa] h-[200px] ${activeIndex === index ? 'active-slide' : ''}`}>
                        <img loading='lazy' src={story?.profileImage} alt="" />
                        <h2 className=' font-syne font-semibold'>{story?.storyGiverName}</h2>
                        <div className=' font-light'>
                            <p>{story.tourExperience.length > 100 ? story.tourExperience.slice(0, 100) : ''} </p>
                            <span className=' storyDes'> {story.tourExperience.slice(100, 110) + "......"}</span>
                        </div>
                    </div>
                    {/* </Link> */}
                </SwiperSlide>
            ))}


        </Swiper>
        // </Suspense >
    );
};

export default Stories;