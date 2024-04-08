/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import AxiosPublic from "../Axios/AxiosPublic";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


const Guides = () => {
    const axiosPublic = AxiosPublic();
    const { data: Guides = [] } = useQuery({
        queryKey: ['guidesTour'],
        queryFn: async () => {
            const res = await axiosPublic.get('/guides');
            return res?.data;
        }
    })

    return (
        <div className=" grid lg:grid-cols-3 py-4 place-items-center">
            {
                Guides?.map((guide, idx) =>
                    <div className="" key={idx}>
                        <Link to={`/guides/details/${guide?._id}`}>
                            <Card className="w-96">
                                <CardHeader floated={false} className=" h-48">
                                    <img className=" w-full h-full object-fill" src={guide?.image} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="text-center">
                                    <Typography variant="h3" color="blue-gray" className="mb-2">
                                        {guide?.name}
                                    </Typography>

                                </CardBody>

                            </Card>
                        </Link>
                    </div>





                )
            }
        </div>



    );
};
export default Guides;