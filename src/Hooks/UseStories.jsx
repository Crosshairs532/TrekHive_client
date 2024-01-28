import { useQuery } from "@tanstack/react-query";
// import AxiosPublic from "../Axios/AxiosPublic";
// import { Suspense } from "react";
// import Loaading from "../Loading/Loaading";

const UseStories = () => {
    // const axiosPublic = AxiosPublic();
    const { data: stories = [] } = useQuery({
        queryKey: ['touristStories'],
        queryFn: async () => {
            const res = await fetch('../../public/stories.json');
            const data = await res?.json();
            console.log(data);
            return data
        }
    })
    return stories;
};

export default UseStories;