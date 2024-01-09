import axios from "axios";
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import toast from "react-hot-toast";
import AxiosSecure from "../../../Axios/AxiosSecure";
import { FaTruckLoading } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPackage = () => {
    const axiosSecure = AxiosSecure();
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = async (data) => {
        const images = data.image;
        const ArrayImages = [];
        const loadin = toast.loading('adding...');

        for (const item of Object.values(images)) {
            const imageFile = { image: item };
            try {
                const res = await axios.post(image_hosting_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
                ArrayImages.push(res?.data?.data?.display_url);
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        const packages = {
            title: data.title, tourType: data.tourType, price: data.price, image: ArrayImages, aboutTheTour: data.aboutTheTour, tourPlan: [
                {
                    day: 'Day 1',
                    highlights: [data.day_1_task1, data.day_1_task2, data.day_1_task3]
                },
                {
                    day: 'Day 2',
                    highlights: [data.day_2_task1, data.day_2_task2, data.day_2_task3]
                },
                {
                    day: 'Day 3',
                    highlights: [data.day_3_task1, data.day_3_task2, data.day_3_task3]
                }


            ]
        }



        const res = await axiosSecure.post('/admin/package', packages);
        if (res.data.insertedId) {
            toast.success('new package added', {
                id: loadin, style: { backgroundColor: '#011621', color: '#FFF' }
            })

        }

    };



    return (
        <div>

            <div className=" mt-[100px]">
                <h2 className=" font-syne text-4xl font-bold text-center">Add Package</h2>
                <div className=" form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" flex gap-x-2 flex-col lg:flex-row">
                            <TextField className=" flex-1" {...register("title", { required: true })} label="title" variant="outlined" />
                            {errors.title && <span className=" text-red-500">title is required</span>}
                            <TextField className=" flex-1" {...register("price", { required: true })} label="price" variant="outlined" />
                            {errors.price && <span className=" text-red-500">price is required</span>}
                            <TextField className=" flex-1" {...register("tourType", { required: true })} label="tourType" variant="outlined" />
                            {errors.tourType && <span className=" text-red-500">Tour Type  is required</span>}
                        </div>
                        <div className=" mt-2">
                            <TextField

                                id="outlined-multiline-flexible" label="aboutTour"
                                multiline
                                {...register('aboutTheTour')}
                                fullWidth
                                maxRows={10}
                            />
                        </div>

                        <h1 className=" font-bold py-3 font-syne text-lg">Tour Plan:</h1>
                        <div className=" grid lg:grid-cols-3 md:grid-cols-3 gap-y-2 gap-x-2 grid-cols-1">

                            <div className=" day-1">
                                <label htmlFor="">Day-1</label>
                                <div className=" flex mt-2 flex-col gap-y-2">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-1"
                                        {...register('day_1_task1')}
                                        multiline
                                        maxRows={4}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-1"
                                        {...register('day_1_task1')}
                                        multiline
                                        maxRows={4}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-1"
                                        {...register('day_1_task1')}
                                        multiline
                                        maxRows={4}
                                    />
                                </div>
                            </div>
                            <div className=" day-2">
                                <label htmlFor="">Day-2</label>
                                <div className=" flex mt-2 flex-col gap-y-2">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-2"
                                        {...register('day_2_task1')}
                                        multiline
                                        maxRows={4}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-2"
                                        multiline
                                        {...register('day_2_task2')}
                                        maxRows={4}
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-2"
                                        multiline
                                        {...register('day_2_task3')}
                                        maxRows={4}
                                    />
                                </div>
                            </div>
                            <div className=" day-3">
                                <label htmlFor="">Day-3</label>
                                <div className=" flex mt-2 flex-col gap-y-2">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-3"
                                        multiline
                                        {...register('day_3_task1')}
                                    // maxRows={ }
                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-3"
                                        multiline
                                        {...register('day_3_task2')}

                                    />
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="day-3"
                                        multiline
                                        {...register('day_3_task3')}

                                    />
                                </div>
                            </div>
                        </div>

                        <div className=" flex justify-between mt-4">

                            <input type="file" {...register('image', { required: true })} multiple className="file-input file-input-bordered w-full max-w-xs" />
                            <button className=" btn  bg-[#011621d1] font-syne text-gray-300" type="submit">Add Package</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default AddPackage;