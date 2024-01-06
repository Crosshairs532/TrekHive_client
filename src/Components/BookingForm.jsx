/* eslint-disable react/prop-types */
import { Input } from "@material-tailwind/react";
import { DatePicker } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form"
import Select from 'react-select'
import { FaImage } from "react-icons/fa";
import { useState } from "react";
import ReactiveButton from 'reactive-button';
import toast from 'react-hot-toast';


const BookingForm = ({ price }) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const [state, setState] = useState('idle');
    const onChange = (date, dateString) => {
        console.log(dateString);
    };
    const [selectedimg, SetImage] = useState(null);
    console.log(selectedimg);

    const options = [
        { value: 'k1', label: 'k1' },
        { value: 'k2', label: 'k2' },
        { value: 'k3', label: 'k3' }
    ]
    const onSubmit = data => {
        console.log(data);
        const loading = toast.loading('Booking');
        console.log(data.guide.value);
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);


    };
    return (
        <div className=" ">
            <h1 className=" text-3xl text-center font-syne font-bold">Booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" p-4 space-y-6 ">
                <Input label="Tourist Name" {...register("TouristName", { required: true })} />
                {errors.TouristName && <span className=" text-red-600 text-xs">* Enter Your Name.</span>}
                <Input label="Tourist Email" {...register("TouristEmail", { required: true })} />
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
                <label htmlFor="image-input" className={`duration-150 flex items-center gap-x-2 ${selectedimg && 'select'}`}> <FaImage size={40} />{selectedimg ? 'Uploaded' : "Upload You image"}</label>

                <input {...register('TouristImage', { required: true })} onChange={SetImage} type="file" id="image-input" className=" image-input file-input file-input-bordered max-w-xs " />
                {/* <button type="submit" className=" font-syne ">Book Now</button> */}
                <ReactiveButton style={{ borderRadius: '20px', boxShadow: ' 0px 10px 20px grey' }} type="submit" buttonState={state} idleText={'Book Now'} loadingText={<>

                    Booking</>} successText={'Booked'} errorText={' Oops! try again'} ></ReactiveButton>


            </form>
        </div >
    );
};

export default BookingForm;