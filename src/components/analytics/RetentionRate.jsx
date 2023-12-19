import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import axios from 'axios';
import Navbar from '../Navbar';
const Dashboard = () => {
    const [first, setfirst] = useState('Retention rate');
    const [data, setData] = useState(null)
    const [retention, setRetentionData] = useState(null)
    const [traffic, setTraffic] = useState(null)


    const [isFilterOpen, setFilterOpen] = useState(false);

    const toggleFilter = () => {
        setFilterOpen(!isFilterOpen);
    };
    useEffect(() => {
        const fetchTrafficData = async () => {
            try {
                const response = await axios.get('https://pgrkam-backend.onrender.com/traffic-data');
                setTraffic(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTrafficData();
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pgrkam-backend.onrender.com/get-device');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        const fetchRetentionData = async () => {
            try {
                const response = await axios.get('https://pgrkam-backend.onrender.com/get-retention');
                setRetentionData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchRetentionData();
    }, [])

    console.log(retention)
    console.log(data)
    console.log(traffic)


    return (
        <div>
            <Navbar />
            <div className='p-10'>
                <h1 className='font-medium'>Retention Rate</h1>
                <h1 className='font-medium text-gray-400 text-sm'>
                    Control and analyse your data in the most convenient way
                </h1>
            </div>
            <div className='px-10'>
                {/* Filter */}
                <div className='relative inline-block text-left'>
                    <button
                        onMouseEnter={()=>{setFilterOpen(true)}}
                        onMouseLeave={()=>{setFilterOpen(false)}}
                        type='button'
                        className='w-32 inline-flex justify-center items-center p-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                        Filter
                    </button>
                    <div
                        className={`${isFilterOpen ? 'origin-top-right' : 'hidden'
                            } absolute right-0 left-10 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                    >
                        <div className='py-1'>
                            <button
                                type='button'
                                className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            >
                                Returning Users
                            </button>
                            <button
                                type='button'
                                className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                            >
                                New Users
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dashboard