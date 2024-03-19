import { Textarea, Button } from "@material-tailwind/react";
import { useState } from "react";
import AxiosPublic from "../Axios/AxiosPublic";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";



const TextArea = () => {
    const axiosPublic = AxiosPublic();
    const [inputValue, setInputValue] = useState('');
    const { user } = UseAuth();
    const [text, setText] = useState(false);
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setText(!text);
        setInputValue(event.target.value)
    }
    const handleShareStory = async () => {
        const story = { storyGiverName: user?.displayName, profileImage: user?.photoURL, tourExperience: inputValue }
        const res = await axiosPublic.post('/stories', story);
        if (res.data.insertedId) {
            toast('Your Story is now visible to others', {
                position: 'bottom-right',
                icon: '👏',
            })
        }
        console.log(res);
    }

    return (
        <div className="relative w-[32rem]">
            <Textarea value={inputValue} onChange={handleInputChange} variant="static" placeholder="Your Comment" rows={8} />
            <div className="flex w-full justify-between py-1.5">
                <div className={`flex gap-2 ${!inputValue ? "hidden" : "block"}`}>
                    <Button onClick={() => setInputValue("")} size="sm" color="red" variant="text" className="rounded-md">
                        Cancel
                    </Button>
                    <Button onClick={handleShareStory} size="sm" className="rounded-md">
                        Share Story
                    </Button>
                </div>
            </div>
        </div>
    );

}


export default TextArea;