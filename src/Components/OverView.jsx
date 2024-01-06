import video from '../assets/overView.mp4';

import { GiAxeSwing } from 'react-icons/gi';
const OverView = () => {
    return (
        <div className=' relative gradient-box h-[80vh]'>

            <video className=' videos' src={video} autoPlay muted></video>
            <div className='gradient-overlay absolute top-0 left-0 w-full h-full'></div>
            <div className=' absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>

                <h1 className=' text-[#dddde0] tourisms flex items- text-2xl lg:text-7xl font-syne font-extrabold'>TrekHive <GiAxeSwing></GiAxeSwing> </h1>
                <h1 className=' text-center text-[#dddde0] tourisms text-xl'>Make You Journey Memorable With Us</h1>

            </div>
        </div>
    );
};

export default OverView;