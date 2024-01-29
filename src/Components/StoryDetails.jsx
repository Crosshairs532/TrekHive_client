import { useParams } from "react-router-dom";
import Loaading from "../Loading/Loaading";
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../Axios/AxiosPublic";
// import UseStories from "../Hooks/UseStories";

const StoryDetails = () => {
    const { id } = useParams();
    const axiosPublic = AxiosPublic();

    const { data: story = [], isLoading, isError } = useQuery({
        queryKey: ['touristStories'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/stories?id=${id}`);
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
    console.log(story);

    return (
        <div className=" pt-[200px] border-2 w-[70%] mx-auto ">
            <img src={story[0]?.image} alt="" />
            <div className=" space-y-7">
                <h1 className=" text-center text-4xl font-syne font-semibold">Hi This is <span className=" text-orange-800">{story[0]?.storyGiverName}</span></h1>
                <p className=" font-light text-justify">
                    {
                        story[0]?.tourExperience
                    }
                </p>
            </div>
        </div>
    );
};

export default StoryDetails;