/* eslint-disable react/prop-types */
import { Typography, Avatar, Rating } from "@material-tailwind/react";
import { useState } from "react";

const Review_Comment = ({ Guide_email, logged_email, rating, review_maker_img }) => {


    return (
        <div>
            <div className="px-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-6 font-medium">
                    &quot;{ }.&quot;
                </Typography>
                <Avatar
                    src={`${review_maker_img}`}
                    alt="image"
                    size="lg"
                />
                <Typography variant="h6" className="mt-4">
                    { }
                </Typography>

                <Rating value={rating} />
            </div>

        </div>
    );
};

export default Review_Comment;





