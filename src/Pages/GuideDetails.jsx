import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../Axios/AxiosPublic";
import Loaading from "../Loading/Loaading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Review_Comment from "../Components/Guide_related/Review_Comment";
import UseAuth from '../Hooks/UseAuth';
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ReviewModal from "../Components/Guide_related/ReviewModal";

const GuideDetails = () => {
    const [modalOn, SetModalOn] = useState({});
    const [review, SetReview] = useState({});
    const { id } = useParams();
    const axiosPublic = AxiosPublic();
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { data: Guides = [], isFetched } = useQuery({
        queryKey: ['guidesDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/guides?id${id}`)
            console.log(res);
            return res.data;
        }
    })
    if (!isFetched) {
        return <Loaading></Loaading>

    }
    const handleReview = () => {
        if (!user) {
            navigate('/login', { state: location.pathname })
        }
        else {
            SetModalOn({ target: "animated-dialog", ripple: "true" })
        }

    }
    return (
        <div className=" max-w-6xl min-h-screen  mx-auto pt-[140px] pb-[100px] px-3 space-y-10">
            <div className=" flex flex-col bg-blue-gray-100 px-4 rounded-xl py-4 lg:flex-row justify-between items-center">
                <div className=" w-[200px] h-[200px] rounded-full"><img className=" rounded-full" src={Guides[0].image} alt="" /></div>
                <div className=" flex flex-col contact-datails">
                    <p>Email:{Guides[0].contactDetails.email}</p>
                    <p>Phone:{Guides[0].contactDetails.phone}</p>
                    <p>Adreess:{Guides[0].contactDetails.address}</p>

                </div>

            </div>
            <div className=" flex justify-between lg:flex-row flex-col gap-y-8">
                <div>
                    <h1 className=" text-4xl font-syne font-bold ">Education</h1>
                    <div className=" flex flex-col">
                        {
                            Guides[0].education.map((edu, idx) => (
                                <>
                                    <div className="" key={idx}>
                                        <h1 className=" font-bold font-syne text-xl">{edu.degree}</h1>
                                        <p className=" font-syne text-xl">{edu.school}</p>
                                        <p>{edu.year}</p>

                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>

                <div className=" skills">
                    <h1 className=" text-4xl font-syne font-bold">Skills</h1>
                    <ul className=" flex flex-col gap-y-4">
                        {
                            Guides[0].skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>

                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className=" experiecne">
                <h1 className=" text-4xl">
                    Experience
                </h1>
                <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                    {
                        Guides[0].workExperience.map((experience, idx) =>

                        (
                            <>
                                <div key={idx}>
                                    <h1><span className=" text-lg font-bold font-syne">Company </span>: {experience.company}</h1>
                                    <p><span className=" text-lg font-bold font-syne">Position </span>: {experience.position}</p>
                                    <p><span className=" font-bold font-syne">StartDate : </span>{experience.startDate}</p>
                                    <p><span className=" font-bold font-syne">EndDate : </span> {experience.endDate}</p>

                                    <h1 className=" mt-11 text-xl font-bold font-syne">Responsibilites:</h1>
                                    <br />
                                    <ul className=" font-sans">
                                        {
                                            experience.responsibilities.map((exp, idx) =>
                                            (
                                                <>
                                                    <li className=" flex items-start" key={idx}>
                                                        <IoIosArrowRoundForward size={30} />
                                                        {
                                                            exp
                                                        }

                                                    </li>
                                                </>

                                            ))

                                        }
                                    </ul>

                                </div>

                            </>



                        ))
                    }
                </div>

            </div>
            <div className=" w-full review_comment">
                <div className=" px-4 rounded-lg bg-blue-gray-100 h-[100px] flex items-center justify-between">
                    <h1 className=" font-syne text-2xl font-bold ">See what other People Say</h1>
                    <ReviewModal modalOn={modalOn} handleReview={handleReview}></ReviewModal>
                </div>
                <div className="my-2">
                    <Review_Comment Guide_email={Guides[0]} logged_email={user?.email}></Review_Comment>
                </div>
            </div>


        </div >

    );
};

export default GuideDetails;