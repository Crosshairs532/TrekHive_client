import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../Axios/AxiosSecure";
import UseAuth from "./UseAuth";


const UseGuide = () => {
    const { user, isLoading } = UseAuth();
    const axiosSecure = AxiosSecure();
    const { data } = useQuery({
        queryKey: ['GuideCheck', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/check/guide?email=${user?.email}`);
            return res.data;
        }

    })
    return data;
};

export default UseGuide;