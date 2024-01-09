

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { ThreeDots } from 'react-loader-spinner'
// import Cards from "./Cards";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Package = () => {

//     const { data: allPackages = [], isFetched } = useQuery({
//         queryKey: ['package'],
//         queryFn: async () => {
//             const res = await axios.get('http://localhost:4000/packages');
//             return res.data;
//         }
//     })
//     if (!isFetched) {
//         return <div className=" border-2 h-[100vh] flex justify-center items-center">

//             <ThreeDots
//                 visible={true}
//                 height="80"
//                 width="80"
//                 color="#4fa94d"
//                 radius="9"
//                 ariaLabel="three-dots-loading"
//                 wrapperStyle={{}}
//                 wrapperClass=""
//             />
//         </div>
//     }



//     return (
//         <>
//             <div className=" grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 place-items-center">
//                 {
//                     allPackages.map((item, idx) => (
//                         <Cards key={idx} id={item._id} image={item.image} title={item.title} tourType={item.tourType} price={item.price}></Cards>
//                     ))
//                 }
//             </div>

//         </>
//     );
// };

// export default Package;