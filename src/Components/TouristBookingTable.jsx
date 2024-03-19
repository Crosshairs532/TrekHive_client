/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useEffect } from 'react';
import AwesomeButton from 'react-awesome-button';

const TouristBookingTable = ({ data }) => {
    return (
        <div className=' mt-[50px]'>
            <h1 className=' font-syne font-bold text-3xl lg:text-5xl text-center'>My Bookings</h1>
            <div className=" overflow-x-auto w-[90%] mx-auto mt-[50px]">
                <table className=" table table-zebra">
                    {/* head */}
                    <thead className=' bg-[#0116214f] backdrop-blur-3xl '>
                        <tr>
                            <th>#</th>
                            <th className=''>Package Name</th>
                            <th>Tour Guide Name</th>
                            <th>Tour Date</th>
                            <th>Tour Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            data?.map((item, idx) => (
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{item.TourPackage}</td>
                                    <td>{item.TourGuide}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.TourPrice}</td>
                                    <td>{item.status}</td>
                                    {
                                        item?.status == 'In Review' ?
                                            <td><button className=' btn' disabled={true} >pay</button></td> :
                                            <td><button className=' btn' disabled={false} >pay</button></td>

                                    }

                                    {!item?.status == 'In Review' ?
                                        <td><button className='btn'>Cancel</button></td> : ''
                                    }
                                    <td><button className=' btn'>Apply</button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table >
            </div >
        </div >
    );
};

export default TouristBookingTable;