import './index.css'
import img1 from './assets/travel1.jpeg'
import img2 from './assets/travel2.jpeg'
import img3 from './assets/travel3.jpeg'
import img4 from './assets/travel4.jpeg'
import img5 from './assets/travel5.jpeg'
// import img6 from './assets/travel6.jpeg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const Slider = () => {
    const handleNext = () => {
        const items = document.querySelectorAll('.item');
        const slides = document.querySelector('.slide');
        slides.appendChild(items[0]);
    };

    const handlePrev = () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    };
    // style={{ backgroundImage: `url(${img6})`
    return (
        <div className="container z-10 min-h-screen max-w-full">
            <div className="slide ">
                <div className="item img1">
                    <div className="content  space-y-3 font-syne text-white">
                        <div className="name text-6xl font-syne font-bold text-[#F5F5F5]">Switzerland</div>
                        <div className="des text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className=' sbtn bg-[#2572c04b] px-4 py-2 rounded-xl font-sans text-zinc-800 font-semibold'>See More</button>
                    </div>
                </div>
                <div className="item im2" style={{ backgroundImage: `url(${img1})` }}>
                    <div className="content space-y-3 font-syne text-white">
                        <div className="name  text-6xl font-syne font-bold text-[#F5F5F5]">Finland</div>
                        <div className="des text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className=' sbtn bg-[#2572c04b] px-4 py-2 rounded-xl font-sans text-zinc-800 font-semibold'>See More</button>
                    </div>
                </div>
                <div className="item im3 ne" style={{ backgroundImage: `url(${img2})` }}>
                    <div className="content space-y-3 font-syne text-white">
                        <div className="name text-6xl font-syne font-bold text-[#F5F5F5]">Iceland</div>
                        <div className="des text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className=' sbtn bg-[#2572c04b] px-4 py-2 rounded-xl font-sans text-zinc-800 font-semibold'>See More</button>
                    </div>
                </div>
                <div className="item im4" style={{ backgroundImage: `url(${img3})` }}>
                    <div className="content space-y-3 font-syne text-white">
                        <div className="name text-6xl font-syne font-bold text-[#F5F5F5]">Australia</div>
                        <div className="des text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className=' sbtn bg-[#2572c04b] px-4 py-2 rounded-xl font-sans text-zinc-800 font-semibold'>See More</button>
                    </div>
                </div>
                <div className="item im5" style={{ backgroundImage: `url(${img4})` }}>
                    <div className="content space-y-3 font-syne text-white">
                        <div className="name text-6xl font-syne font-bold text-[#F5F5F5]">Netherland</div>
                        <div className="des text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className=' sbtn bg-[#2572c04b] px-4 py-2 rounded-xl font-sans text-zinc-800 font-semibold'>See More</button>
                    </div>
                </div>
                <div className="item im6" style={{ backgroundImage: `url(${img5})` }}>
                    <div className="content space-y-3 font-syne text-white">
                        <div className="name text-6xl font-syne font-bold text-[#F5F5F5]">Ireland</div>
                        <div className="des text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                        <button className=' sbtn bg-[#2572c04b] px-4 py-2 rounded-xl font-sans text-zinc-800 font-semibold'>See More</button>
                    </div>
                </div>
            </div>
            <div className=" duration-200 absolute bottom-[15%] left-[15%] lg:left-[25%] z-10 flex gap-3">
                <button className=" border-none bg-[#80808098] duration-150 left w-[30px] h-[30px] rounded-full lg:w-[60px] lg:h-[60px] flex justify-center items-center prev" onClick={handlePrev}>
                    <p className=' text-xl lg:text-2xl'><MdOutlineKeyboardDoubleArrowLeft  ></MdOutlineKeyboardDoubleArrowLeft></p>
                </button>
                <button className=" border-none right bg-[#80808098] duration-150 w-[30px] h-[30px] rounded-full lg:w-[60px]  lg:h-[60px]  flex justify-center items-center  next" onClick={handleNext}>
                    <p className=' text-xl lg:text-2xl'><MdKeyboardDoubleArrowRight ></MdKeyboardDoubleArrowRight></p>
                </button>
            </div>
        </div>
    );
};


export default Slider;