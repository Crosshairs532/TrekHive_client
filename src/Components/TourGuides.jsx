import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TourGuides = () => {
    const { data: Guides = [], isFetched } = useQuery({
        queryKey: ['guides'],
        queryFn: async () => {
            const res = await axios.get('');
            return res.data;
        }
    })

    return (
        <div>

        </div>
    );
};

export default TourGuides;