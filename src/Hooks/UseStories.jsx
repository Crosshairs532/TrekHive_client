// import { useQuery } from "@tanstack/react-query";
// import AxiosPublic from "../Axios/AxiosPublic";
// import Loaading from "../Loading/Loaading";


// const UseStories = () => {
//     const axiosPublic = AxiosPublic();
//     const { data, isFetched } = useQuery({
//         queryKey: ['touristStories'],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/stories`)
//             console.log(res);
//             return res?.data;
//         }
//     })

//     if (!isFetched) {
//         return <Loaading></Loaading>

//     }

//     return data;
// };

// export default UseStories;