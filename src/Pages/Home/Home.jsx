import TourGuides from "../../Components/TourGuides";
import TourTypes from "../../Components/TourTypes";
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
                <div className=" min-h-screen relative my-[100px]">
                    <Tourism></Tourism>
                </div>
                <div className=" max-w-7xl relative mx-auto  min-h-[80vh]">
                    <TourGuides></TourGuides>
                </div>
                <div className=" max-w-7xl relative mx-auto min-h-[80vh]">
                    <TourTypes></TourTypes>
                </div>
            </div>
        </div>
    );
};

export default Home;