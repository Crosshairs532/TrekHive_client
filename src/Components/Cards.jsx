/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import AxiosPublic from '../Axios/AxiosPublic';
import toast from 'react-hot-toast';
import UseAuth from "../Hooks/UseAuth";
import { IoTrashBinSharp } from "react-icons/io5";


const Cards = ({ image, title, tourType, price, id }) => {
    const axiosPublic = AxiosPublic();
    const { user } = UseAuth();
    const handleWishist = () => {
        const wish = { title: title, tourType: tourType, tourPrice: price, email: user?.email, id: id }
        console.log(wish);
        axiosPublic.post('/wishlist', wish)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    toast.success("added to your wishlist")
                }
            })
    }
    return (
        <Card className="mt-6 w-[90%] flex justify-around h-[400px]">
            <CardHeader color="blue-gray" className=" relative">
                <img loading="lazy"
                    className=" w-full z-10 h-[200px] object-cover"
                    src={image}
                    alt="card-image"
                />
                <button onClick={handleWishist} className="  text-pink-300 absolute bottom-1 right-2 z-20"><FavoriteIcon></FavoriteIcon></button>
            </CardHeader>
            <CardBody className="">
                <Typography variant="h5" color="blue-gray" className="mb-2 ">
                    {title}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
                <div className=" flex flex-col">
                    <p>{tourType}</p>
                    <p>{price}</p>
                </div>
                <Link to={`/ourPackages/details/${id}`}>  <button className="btn text-lg bg-[#002538] font-sans text-[#F0F3FA]">see more</button></Link>
            </CardFooter>
        </Card>
    );
}
export default Cards;