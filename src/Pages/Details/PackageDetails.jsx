import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { GiHiking } from "react-icons/gi";

import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import BookingForm from "../../Components/BookingForm";
import TourGuides from "../../Components/TourGuides";
import AxiosPublic from "../../Axios/AxiosPublic";
// import AxiosSecure from "../../Axios/AxiosSecure";

const PackageDetails = () => {
    const param = useParams();
    const axiosPublic = AxiosPublic();

    console.log(param);
    const { data: Detailed = [], isFetched } = useQuery({
        queryKey: ['singlePackage'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages?id=${param?.id}`);
            return res.data;
        }
    })

    if (!isFetched) {
        return <div className=" min-h-screen w-full">
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>

    }
    console.log(Detailed);
    return (
        <div className=" min-h-screen md:max-w-2xl max-w-sm lg:max-w-screen-2xl  mx-auto">
            <div className=" min-h-screen pt-[150px]">
                <div className="image-section w-full h-[300px] grid grid-cols-12 gap-2 ">
                    <div className=" col-span-8">
                        <img className=" w-full h-[51%] object-cover rounded-xl" src={Detailed[0]?.image} alt="" />
                    </div>
                    <div className=" col-span-4">
                        <img className=" w-full h-[25%] rounded-xl col-span-4 object-cover  " src={Detailed[0]?.image} alt="" />
                        <div className=" col-span-2 mt-2 flex gap-1">
                            <img className=" w-[50%] object-cover rounded-xl " src={Detailed[0]?.image} alt="" />
                            <img className=" w-[50%] object-cover rounded-xl " src={Detailed[0]?.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" grid font-sans grid-cols-1 pt-11 gap-y-4 lg:gap-x-3 place-items-center lg:grid-cols-12">
                    <div className=" p-2  w-full  col-span-8 ">
                        <h1 className=" text-xl md:text-2xl lg:text-3xl font-syne font-bold">{Detailed[0]?.title}</h1>
                        <div className=" flex items-center gap-x-5 mt-2">
                            <h1 className="  flex justify-around items-center gap-3 "><GiHiking size={30}></GiHiking>{Detailed[0]?.tourType}</h1>
                            <p className=" ">{Detailed[0]?.price}</p>
                        </div>
                        <p className=" text-sm  font-light pt-10">
                            {
                                Detailed[0]?.aboutTheTour}
                        </p>
                        <h1 className=" font-syne font-bold mt-4">Tour Plan:</h1>
                        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">
                                    <div className="text-lg font-black">{Detailed[0].tourPlan[0].day}</div>
                                    <ul className=" font-light">
                                        <li>
                                            {Detailed[0].tourPlan[0].highlights[0]}
                                        </li>
                                        <li>
                                            {Detailed[0].tourPlan[0].highlights[1]}
                                        </li>
                                        <li>
                                            {Detailed[0].tourPlan[0].highlights[2]}
                                        </li>
                                    </ul>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <div className="text-lg font-black">{Detailed[0].tourPlan[1].day}</div>
                                    <ul className=" font-light">
                                        <li>
                                            {Detailed[0].tourPlan[1].highlights[0]}
                                        </li>
                                        <li>
                                            {Detailed[0].tourPlan[1].highlights[1]}
                                        </li>
                                        <li>
                                            {Detailed[0].tourPlan[1].highlights[2]}
                                        </li>
                                    </ul>

                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-start md:text-end mb-10">

                                    <div className="text-lg font-black">{Detailed[0].tourPlan[2].day}</div>
                                    <ul className=" font-light">
                                        <li>
                                            {Detailed[0].tourPlan[2].highlights[0]}
                                        </li>
                                        <li>
                                            {Detailed[0].tourPlan[2].highlights[1]}
                                        </li>
                                        <li>
                                            {Detailed[0].tourPlan[2].highlights[2]}
                                        </li>
                                    </ul>

                                </div>
                                <hr />
                            </li>


                        </ul>
                    </div>
                    <div className=" rounded-2xl w-full bg-white shadow-2xl pt-2 col-span-4  ">
                        <BookingForm packageName={Detailed[0]?.title} price={Detailed[0]?.price}></BookingForm>
                    </div>

                </div>

            </div>
            <div>
                <h1 className=" font-syne text-5xl font-bold text-center">Tour Guides</h1>
                <TourGuides></TourGuides>
            </div>
        </div >
    );
};

export default PackageDetails;