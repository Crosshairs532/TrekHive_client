import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import Loaading from "../Loading/Loaading";
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../Axios/AxiosPublic";
import Swal from 'sweetalert2';
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton } from 'react-share';
import UseAuth from '../Hooks/UseAuth';
import { useState } from "react";
// import UseStories from "../Hooks/UseStories";

const StoryDetails = () => {
    const [disabled, setDisable] = useState(true);
    const navigate = useNavigate();
    const { user } = UseAuth();
    const location = useLocation();
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

    const handleShare = (value) => {
        if (value === 'facebook') {
            if (!user) {
                Swal.fire({
                    title: "Your are not logged in",
                    showDenyButton: true,
                    confirmButtonText: "login?",
                    denyButtonText: `Not Now`
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        <Navigate to={'/login'} state={location.pathname}></Navigate>

                    }
                });
            }
        }
    };


    return (
        <div className=" pt-[200px] min-h-screen border-2 w-[80%] mx-auto ">
            <div className=" flex gap-y-4 lg:gap-x-4 lg:flex-row flex-col absolute bottom-[20%] share_button">

                <button className=" w-[32px] h-[32px] rounded-full" onClick={() => handleShare('facebook')}>
                    <FacebookShareButton disabled={disabled} url={facebookUrl} >
                        <FacebookIcon size={32} round={true}></FacebookIcon>
                    </FacebookShareButton>

                </button>

                <InstapaperShareButton disabled={disabled} onClick={() => handleShare('insta')}>
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