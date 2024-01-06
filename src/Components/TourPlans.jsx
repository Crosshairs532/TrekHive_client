

const TourPlans = () => {
    return (
        <div>
            <div className=" grid font-sans grid-cols-1 pt-11 gap-y-4 lg:gap-x-3 place-items-center lg:grid-cols-12">
                <div className=" p-2  w-full  col-span-8 ">
                    <h1 className=" text-xl md:text-2xl lg:text-3xl font-syne font-bold">{Detailed[0]?.title}</h1>
                    <div className=" flex items-center gap-x-5 mt-2">
                        <h1 className="  flex justify-around items-center gap-3 "><GiHiking size={30}></GiHiking>{Detailed[0]?.tourType}</h1>
                        <p className=" ">{Detailed[0]?.price}</p>
                    </div>
                    <p className=" text-sm  font-light pt-10">
                        {
                            Detailed[0]?.aboutTheTour}
                    </p>
                    <h1 className=" font-syne font-bold mt-4">Tour Plan:</h1>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        <li>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">
                                <div className="text-lg font-black">{Detailed[0].tourPlan[0].day}</div>
                                <ul className=" font-light">
                                    <li>
                                        {Detailed[0].tourPlan[0].highlights[0]}
                                    </li>
                                    <li>
                                        {Detailed[0].tourPlan[0].highlights[1]}
                                    </li>
                                    <li>
                                        {Detailed[0].tourPlan[0].highlights[2]}
                                    </li>
                                </ul>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end mb-10">
                                <div className="text-lg font-black">{Detailed[0].tourPlan[1].day}</div>
                                <ul className=" font-light">
                                    <li>
                                        {Detailed[0].tourPlan[1].highlights[0]}
                                    </li>
                                    <li>
                                        {Detailed[0].tourPlan[1].highlights[1]}
                                    </li>
                                    <li>
                                        {Detailed[0].tourPlan[1].highlights[2]}
                                    </li>
                                </ul>

                            </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-start md:text-end mb-10">

                                <div className="text-lg font-black">{Detailed[0].tourPlan[2].day}</div>
                                <ul className=" font-light">
                                    <li>
                                        {Detailed[0].tourPlan[2].highlights[0]}
                                    </li>
                                    <li>
                                        {Detailed[0].tourPlan[2].highlights[1]}
                                    </li>
                                    <li>
                                        {Detailed[0].tourPlan[2].highlights[2]}
                                    </li>
                                </ul>

                            </div>
                            <hr />
                        </li>


                    </ul>
                </div>
                <div className=" rounded-2xl w-full bg-white shadow-2xl pt-2 col-span-4  ">
                    <BookingForm price={Detailed[0]?.price}></BookingForm>
                </div>

            </div>

        </div>
    );
};

export default TourPlans;