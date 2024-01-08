import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import AxiosSecure from "../../Axios/AxiosSecure";
import Loaading from "../../Loading/Loaading";
import { IoTrashBinSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const TouristWishlist = () => {
    const { user, isLoading } = UseAuth();
    const axiosSecure = AxiosSecure();
    const { data, isFetched, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist?email=${user?.email}`);
            return res.data;
        }
    })
    if (!isFetched || isLoading) {
        return <Loaading></Loaading>
    }
    const handleDelete = async (id) => {
        const res = await axiosSecure.delete(`/wishlist?id=${id}`);
        if (res.data.deletedCount > 0) {
            toast.success("Deleted");
            refetch();
        }

    }

    return (
        <div className=' mt-[50px]'>
            <h1 className=' font-syne font-bold text-3xl lg:text-5xl text-center'>Wishlist</h1>
            <div className=" overflow-x-auto w-[90%] mx-auto mt-[50px]">
                <table className=" table table-zebra">
                    {/* head */}
                    <thead className=' bg-[#0116214f] backdrop-blur-3xl '>
                        <tr>
                            <th></th>
                            <th className=''>Package Name</th>
                            <th>Tour Guide Name</th>
                            <th>Tour Date</th>
                            <th>Tour Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data?.map((item, idx) => (
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.tourType}</td>
                                    <td>{item.tourPrice}</td>
                                    <td><button onClick={() => handleDelete(item._id)} className=" btn text-red-400 bg-transparent"><IoTrashBinSharp /></button></td>
                                    <td><Link to={`/ourPackages/details/${item?.id}`}><button>view details</button></Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table >
            </div >
        </div >
    );
};

export default TouristWishlist;