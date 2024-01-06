/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";
import { DatePicker } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form"
import Select from 'react-select'
import { useState } from "react";
import ReactiveButton from 'reactive-button';
import toast from 'react-hot-toast';
import axios from "axios";
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment'
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const BookingForm = ({ price }) => {
    const [date, setDate] = useState('');
    const todayDate = moment().format('YYYY-MM-DD');
    console.log(todayDate);
    const GoTo = useNavigate();
    const location = useLocation();
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const { user } = UseAuth();
    const [state, setState] = useState('idle');
    const onChange = (date, dateString) => {
        setDate(dateString)
        console.log(dateString);
    };
    console.log(user);

    const options = [
        { value: 'k1', label: 'k1' },
        { value: 'k2', label: 'k2' },
        { value: 'k3', label: 'k3' }
    ]
    const onSubmit = async (data) => {
        if (!user?.email) {
            return Swal.fire({
                title: "You are not logged in",
                text: "You have to login before further Procedure",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#002538",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login",
                cancelButtonText: "Not Now",
                customClass: {
                    container: 'swal2-popup', // Add a class to the container
                },

            }).then((result) => {
                if (result.isConfirmed) {

                    return GoTo('/login', { state: location.pathname, replace: true });

                }
            });
        }
        const loading = toast.loading('Booking');
        const imageFile = { image: data.TouristImage[0] }
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const photo = res.data.data.display_url;
        console.log(photo);
        const Booking = { TouristName: data.TouristName, TouristEmail: data.TouristEmail, guide: data.guide.value, TouristImage: photo, Date: date ? date : todayDate, TourPrice: data.Price }
        if (photo) {
            const res = await axios.post('http://localhost:4000/booking', Booking);
            if (res.data.insertedId) {
                toast.success('Tour Booked', {
                    id: loading
                })
            }
        }
        toast.success('Booked', { id: loading })
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);


    };

    return (
        <>
            <div className=" ">
                <h1 className=" text-3xl text-center font-syne font-bold">Booking Form</h1>
                <form onSubmit={handleSubmit(onSubmit)} className=" p-4 space-y-6 ">
                    <Input label="Tourist Name" {...register("TouristName", { required: true })} />
                    {errors.TouristName && <span className=" text-red-600 text-xs">* Enter Your Name.</span>}
                    <Input label="Tourist Email" defaultValue={user?.email} {...register("TouristEmail", { required: true })} />
                    {errors.TouristEmail && <span className=" text-red-600 text-xs">* Enter Your Email.</span>}
                    <div>
                        <Controller
                            name="guide"
                            control={control}
                            rules={{ required: 'This field is required' }}
                            render={({ field }) => (

                                <Select
                                    defaultValue={{ label: 'Choose Your Tour guide' }}
                                    {...field}
                                    options={options}
                                />
                            )}
                        />
                    </div>
                    <div className=" flex items-center gap-x-2">
                        <Input className="" label="Price" defaultValue={price} {...register("Price", { required: true })} />
                        <div className=" w-1/2">
                            <DatePicker {...register('TourDate')} onChange={onChange} />
                        </div>
                    </div>
                    {/* <label htmlFor="image-input" className={`duration-150 flex items-center gap-x-2 ${selectedimg && 'select'}`}> <FaImage size={40} />{selectedimg ? 'Uploaded' : "Upload You image"}</label> */}
                    <input {...register('TouristImage', { required: true })} type="file" id="image-input" className=" image-input file-input file-input-bordered max-w-xs " />
                    {/* <button type="submit" className=" font-syne ">Book Now</button> */}
                    <ReactiveButton style={{ borderRadius: '20px', boxShadow: ' 0px 10px 20px grey' }} type="submit" buttonState={state} idleText={'Book Now'} loadingText={<>

                        Booking</>} successText={'Booked'} errorText={' Oops!try again'} ></ReactiveButton>


                </form>
            </div >


        </>
    );
};

export default BookingForm;