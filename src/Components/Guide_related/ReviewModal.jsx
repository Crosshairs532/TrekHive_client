/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Textarea } from "@material-tailwind/react"

const ReviewModal = () => {
    const [show, SetShow] = useState(false);
    const handleModal = () => SetShow(!show); console.log(show)
    return (
        <>
            <button onClick={handleModal}>Review</button>

            {
                show &&
                <div className=" modal_container  w-full h-full">
                    <div className=" flex px-4  rounded-lg py-2 flex-col modal_wrap ">
                        <div className=" flex-1 review">
                            <p>hello world</p>
                        </div>
                        <div className="flex-1  comment ">
                            <Textarea label="leave your review..." />
                        </div>
                        <div className=" flex justify-between bottom-0">
                            <Button onClick={() => handleModal()} className=" bg-blue-gray-200 text-cyan-700">submit</Button>
                            <Button onClick={handleModal} className=" bg-blue-gray-200 text-cyan-700">cancel</Button>
                        </div>
                    </div>
                </div>

            }


        </>
    );
};

export default ReviewModal;

