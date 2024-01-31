import { useParams } from "react-router-dom";
import Loaading from "../Loading/Loaading";
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../Axios/AxiosPublic";
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton } from 'react-share';
// import UseStories from "../Hooks/UseStories";

const StoryDetails = () => {
    const { id } = useParams();
    const axiosPublic = AxiosPublic();
    const facebookUrl = "https://www.facebook.com/zidan.tanzim";
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
        <div className=" pt-[200px] min-h-screen border-2 w-[80%] mx-auto ">
            <div className=" flex gap-y-4 lg:gap-x-4 lg:flex-row flex-col absolute bottom-[20%] share_button">
                <FacebookShareButton url={facebookUrl} >
                    <FacebookIcon size={32} round={true}></FacebookIcon>

                </FacebookShareButton>
                <InstapaperShareButton>
                    <InstapaperIcon iconFillColor="white" size={32} round={true}></InstapaperIcon>
                </InstapaperShareButton>

            </div>
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