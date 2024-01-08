import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../Axios/AxiosSecure';
import UseAuth from '../../Hooks/UseAuth';
import Loaading from '../../Loading/Loaading';
import TouristBookingTable from '../../Components/TouristBookingTable';
const TouristBookings = () => {
    const axiosSecure = AxiosSecure();
    const { user, isLoading } = UseAuth();
    const { data, isFetched } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking?email=${user?.email}`);
            return res.data;
        }
    })
    if (!isFetched || isLoading) {
        return <Loaading></Loaading>
    }

    return (
        <div>
            {
                !data ? <h1>No data is available</h1> :
                    <>
                        <TouristBookingTable data={data} ></TouristBookingTable>
                    </>


            }
        </div>
    );
};

export default TouristBookings;