import UseAuth from "./UseAuth";
import AxiosSecure from '../Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTourGuide = () => {
    const { user, isLoading } = UseAuth();
    const axiosSecure = AxiosSecure();
    console.log(user?.email);
    const { data } = useQuery({
        queryKey: ['guideCheck', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/check/guide?email=${user?.email}`);
            return res.data;
        }

    })
    return data
};

export default useTourGuide;