import Tourism from "../../Components/Tourism";
import Slider from "../../Slider";


const Home = () => {
    return (
        <div>
            <div className=" relative">
                <div className="relative min-h-screen">
                    <Slider></Slider>
                </div>
                <div className=" shade relative"></div>
                <div className=" min-h-screen relative mt-[100px]">
                    <Tourism></Tourism>
                </div>
            </div>
        </div>
    );
};

export default Home;