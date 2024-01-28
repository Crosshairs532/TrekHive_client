/* eslint-disable no-unused-vars */
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext, TabList } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Package from './Package';
import OverView from './OverView';
const Tourism = () => {
    const [value, setValue] = useState('overview');
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        console.log(newValue);

        setValue(newValue);
    };
    const handleBack = () => {
        navigate('/meals')
    }


    return (
        <>
            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-syne font-extrabold text-center  tourism'>Tourism and travel guide </h1>
            <div className='  mt-16 '>
                <TabContext value={value} >
                    <div className='  w-[max-content] mx-auto'>
                        <TabList onChange={handleChange} textColor="secondary"
                            indicatorColor="secondary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="secondary tabs example">
                            <Tab label="Overview" value="overview" />
                            <Tab label="Our Packages" value="packages" />
                            <Tab label="Tour Guides" value="guides" />
                        </TabList>
                    </div>
                    <TabPanel value="overview">
                        <OverView></OverView>
                    </TabPanel>
                    <TabPanel value="packages">
                        <Package></Package>
                    </TabPanel>
                    <TabPanel value="guides">
                        <h1>guides</h1>
                    </TabPanel>

                </TabContext>

            </div >
        </>
    );
}
export default Tourism;