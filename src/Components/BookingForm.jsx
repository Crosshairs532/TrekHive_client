import { Input } from "@material-tailwind/react";

import { Controller, useForm } from "react-hook-form"
import Select from 'react-select'
import { FaImage } from "react-icons/fa";
const BookingForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    // const [selectedOption, setSelectedOption] = useState(null);
    // console.log(selectedOption);
    // const handleChange = (selectedOption) => {
    //     setSelectedOption(selectedOption);
    // };

    const options = [
        { value: 'k1', label: 'k1' },
        { value: 'k2', label: 'k2' },
        { value: 'k3', label: 'k3' }
    ]
    const onSubmit = data => {
        console.log(data.guide.value);

    };
    return (
        <div>
            <h1 className=" text-3xl text-center font-syne font-bold">Booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" p-4 space-y-6">
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
                <input type="file" className="file-input file-input-bordered max-w-xs " />
                <FaImage />
                <input type="submit" />
            </form>
        </div>
    );
};

export default BookingForm;