import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../Axios/AxiosPublic";
import Loaading from "../Loading/Loaading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useParams } from "react-router-dom";

const GuideDetails = () => {
    const { id } = useParams();
    const axiosPublic = AxiosPublic();
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
    return (
        <div className=" max-w-6xl mx-auto pt-[140px] pb-[100px] px-3 space-y-10">
            <div className=" flex flex-col  lg:flex-row justify-between items-center">
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

        </div>

    );
};

export default GuideDetails;