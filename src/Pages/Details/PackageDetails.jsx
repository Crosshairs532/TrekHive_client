import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
    const param = useParams();
    console.log(param);
    const { data: Detailed = [], isFetched } = useQuery({
        queryKey: ['singlePackage'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:4000/packages?id=${param?.id}`);
            return res.data;
        }
    })

    if (!isFetched) {


    }
    return (
        <div className=" bg-[#F0F3FA] relative min-h-screen">
            <div className=" pt-[114px]">


            </div>
        </div>
    );
};

export default PackageDetails;