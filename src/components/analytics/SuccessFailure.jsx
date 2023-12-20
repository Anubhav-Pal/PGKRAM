import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Navbar from '../Navbar';
import axios from 'axios';

const SuccessFailure = () => {
    const [SFdata, setSFdata] = useState({});
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: 'education-chart',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            title: {
                // text: 'Education Distribution',
                align: 'center',
            },
        },
        series: [
            {
                name: 'Success',
                data: [45, 68, 40, 72, 55, 48, 40, 32, 35, 78, 60, 82],
            },
            {
                name: 'Failure',
                data: [30, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38],
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://pgrkam-backend.onrender.com/get-success');
                setSFdata(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setChartData((prevChartData) => ({
            ...prevChartData,
            series: [
                {
                    name: 'Success',
                    data: SFdata.Success_data || [],
                },
                {
                    name: 'Failure',
                    data: SFdata.Failure || [],
                },
            ],
        }));
    }, [SFdata]);

    console.log(SFdata.Success_data);
    console.log(SFdata.Failure);

    return (
        <div>
            <Navbar />
            <div className='p-10'>
                <h1 className='font-medium'>Job Success Failure ratio</h1>
                <h1 className='font-medium text-gray-400 text-sm'>Control and analyse your data in the most convenient way</h1>
            </div>
            <div className='shadow flex items-center justify-center'>
                <div className='p-4'>
                    <Chart options={chartData.options} series={chartData.series} type='bar' width={700} />
                </div>
            </div>
        </div>
    );
};

export default SuccessFailure;
