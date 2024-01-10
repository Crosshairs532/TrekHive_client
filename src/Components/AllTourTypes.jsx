import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AxiosPublic from "../Axios/AxiosPublic";
import Loaading from "../Loading/Loaading";
import Cards from "./Cards";


const AllTourTypes = () => {
    const { type } = useParams();
    console.log(type)
    const axiosPublic = AxiosPublic();
    const { data: allTours = [], isFetched } = useQuery({
        queryKey: ['specific_type_tour'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages?tour=${type}`)
            return res.data;
        }

    })
    if (!isFetched) {
        return <Loaading></Loaading>
    }
    return (
        <div className="pt-[114px] pb-[20px]">
            {
                allTours.length > 0 ? (
                    <div className=" grid  lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 place-items-center">
                        {
                            allTours.map((item, idx) => (
                                <Cards key={idx} id={item._id} image={item.image} title={item.title} tourType={item.tourType} price={item.price}></Cards>
                            ))
                        }

                    </div>

                ) : <>

                    <div className=" flex no_package justify-center items-center h-[calc(100vh-114px)] w-full ">
                        <h1 className=" text-gray-400 text-5xl font-syne font-bold"> No package Available!</h1>
                    </div>


                </>
            }
        </div>
    );
};

export default AllTourTypes;