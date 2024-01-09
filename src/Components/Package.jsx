import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'
import Cards from "./Cards";
import { useEffect, useState } from "react";


const Package = () => {

    const [less, setLess] = useState(true);
    const [count, setCount] = useState(3);
    const { data: allPackages = [], isFetched, refetch } = useQuery({
        queryKey: ['package', count],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:4000/packages?count=${count}`);
            return res.data;
        }
    })

    useEffect(() => {
        if (count > 3) {
            setLess(false)
        }
        else {

            setLess(true)
        }
    }, [count])

    if (!isFetched) {
        return <div className=" border-2 h-[100vh] flex justify-center items-center">

            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    const handleSeeMore = () => {
        setCount(count * 2)
        refetch()

    }

    const handleSeeLess = () => {
        if (count > 3) {
            setCount(count - 3);
            refetch()
        }

    }

    return (
        <>
            <div className=" grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 place-items-center">
                {
                    allPackages.map((item, idx) => (
                        <Cards key={idx} id={item._id} image={item.image} title={item.title} tourType={item.tourType} price={item.price}></Cards>
                    ))
                }

            </div>
            <div className=' w-full flex justify-center item-center py-10'>
                {/* <Link to={'/home/allpackges'}><button className=' mx-auto btn bg-[#004E52] text-[#F0F3FA] font-syne text-xl' >All Packages</button></Link> */}
                <button onClick={handleSeeMore} className=' mx-auto  text-[#004E52] underline underline-offset-8  font-syne text-xl' >see more</button>
                {
                    less ? '' : <button onClick={handleSeeLess} className=' mx-auto  text-[#004E52] underline underline-offset-8  font-syne text-xl' >see less</button>

                }
            </div >
        </>
    );
};

export default Package;