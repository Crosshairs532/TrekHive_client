/* eslint-disable react/prop-types */
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link, } from 'react-router-dom';
import AxiosPublic from '../Axios/AxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loaading from '../Loading/Loaading';

const Stories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    const axiosPublic = AxiosPublic();

    const { data: stories = [], isLoading, isError } = useQuery({
        queryKey: ['touristStories'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/stories`);
                return res?.data;
            } catch (error) {
                throw new Error('Failed to fetch stories');
            }
        },
    });

    if (isLoading) {
        return <Loaading />;
    }
    if (isError) {
        return <div>Error loading stories</div>;
    }

    return (
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper1"
            slidesPerView={3}
            centeredSlides={1}
            spaceBetween={20}
            onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
            {stories?.map((story, index) => (
                <SwiperSlide className="TourStory" key={story._id}>
                    <Link to={`tour_story/${story.storyGiverName}/${story._id}`}>
                        <div className={`px-4 py-2 text-black duration-300 w-auto bg-[#f1f3fa] h-[200px] ${activeIndex === index ? 'active-slide' : ''}`}>
                            <img loading="lazy" src={story?.profileImage} alt="" />
                            <h2 className="font-syne font-semibold">{story?.storyGiverName}</h2>
                            <div className="font-light">
                                <span>{story.tourExperience.length > 100 ? story.tourExperience.slice(0, 100) : ''}</span>
                                <span className="storyDes"> {story.tourExperience.slice(100, 110) + '......'}</span>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Stories;