/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import cablecar2 from '../assets/cablecar2.jpeg'

const TourGuides = () => {
    const { data: Guides = [], isFetched } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axios.get('');
            return res.data;
        }
    })

    return (
        <div className=" relative">
            <h1 className=" font-syne overflow-hidden guide relative text-xl lg:text-4xl font-bold "> Meet Our Tour Guides</h1>
            <div className="flex justify-center  items-center">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper mt-20"
                >
                    <SwiperSlide className="hi" >
                        <div className=" flex relative justify-center items-center flex-col w-full h-[300px]">
                            <img className=" w-[100px] h-[100px] rounded-full" src={cablecar2} alt="" />
                            <h1 className=" text-2xl font-syne text-gray-50">tanzim</h1>
                            <p>Hiking</p>
                            <button className=" guide-more relative">see more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="hi" >
                        <div className=" flex relative justify-center items-center flex-col w-full h-[300px]">
                            <img className=" w-[100px] h-[100px] rounded-full" src={cablecar2} alt="" />
                            <h1 className=" text-2xl font-syne text-gray-50">tanzim</h1>
                            <p>Hiking</p>
                            <button className=" guide-more relative">see more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="hi" >
                        <div className=" flex relative justify-center items-center flex-col w-full h-[300px]">
                            <img className=" w-[100px] h-[100px] rounded-full" src={cablecar2} alt="" />
                            <h1 className=" text-2xl font-syne text-gray-50">tanzim</h1>
                            <p>Hiking</p>
                            <button className=" guide-more relative">see more</button>
                        </div>
                    </SwiperSlide>




                </Swiper>
            </div>
        </div >
    );
};

export default TourGuides;