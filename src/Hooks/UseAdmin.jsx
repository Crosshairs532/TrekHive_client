import UseAuth from "./UseAuth";
import AxiosSecure from '../Axios/AxiosSecure';
import { useQuery } from '@tanstack/react-query';


const UseAdmin = () => {
    const { user, isLoading } = UseAuth();
    const axiosSecure = AxiosSecure();
    console.log(user?.email);
    const { data } = useQuery({
        queryKey: ['adminCheck', user?.email],
        enabled: !isLoading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/check/admin?email=${user?.email}`);
            return res.data;
        }

    })
    console.log(data);
    return data
};

export default UseAdmin;