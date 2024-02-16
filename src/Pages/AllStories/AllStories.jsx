import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../../Axios/AxiosPublic";
import Loaading from "../../Loading/Loaading";
import { Link } from "react-router-dom";

const AllStories = () => {
    const axiosPublic = AxiosPublic();
    const { data: allStories = [], isFetched } = useQuery({
        queryKey: ['all stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories');
            return res.data
        }
    })

    if (!isFetched) {
        return <Loaading></Loaading>

    }
    console.log(allStories.length);

    return (
        <div className="  py-[124px]">
            <div className=" z-10 container min-h-screen place-items-center mx-auto  md:gap-x-2 lg:gap-x-2 gap-y-2 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {
                    allStories?.map((story, index) => (
                        <Link className="group" key={index} to={`/tour_story/${story.storyGiverName}/${story._id}`}>
                            <div className={` py-2 mx-2 lg:mx-0 md:mx-0 active text-black duration-300 px-4 w-auto md:w-auto lg:w-auto bg-[#f1f3fa] h-[200px] `}>
                                <img loading="lazy" src={story?.profileImage} alt="" />
                                <h2 className="font-syne font-semibold">{story?.storyGiverName}</h2>
                                <div className="font-light">
                                    <span>{story.tourExperience.length > 100 ? story.tourExperience.slice(0, 100) : ''}</span>
                                    <span className="storyDes"> {story.tourExperience.slice(100, 110) + '......'}</span>
                                </div>
                            </div>
                        </Link>
                    ))

                }

            </div>
        </div>
    );
};

export default AllStories;