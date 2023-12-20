import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Navbar from "../Navbar";
import axios from "axios";

const TrafficSource = () => {
    const [first, setfirst] = useState("Retention rate");
    const [data, setData] = useState(null);
    const [retention, setRetentionData] = useState(null)
    const [traffic, setTraffic] = useState(null);
    const [user, setUser] = useState(null);
    const [options, setOptions] = useState(null);
    useEffect(() => {
        const fetchTrafficData = async () => {
            try {
                const response = await axios.get(
                    "https://pgrkam-backend.onrender.com/traffic-data"
                );
                setTraffic(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
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
        const fetchUserData = async () => {
          try {
            const response = await axios.get('https://pgrkam-backend.onrender.com/user-data');
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchUserData();
        const fetchOptionsData = async () => {
          try {
            const response = await axios.get('https://pgrkam-backend.onrender.com/get-options');
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchOptionsData();
    }, []);
    // console.log(options) 
    console.log(user)
    // console.log(retention)
    // console.log(data)
    // console.log(traffic);

    const optionschart = {
        chart: {
            type: "donut",
            offsetY: 10,
        },
        plotOptions: {
            pie: {
                size: 150,
                donut: {
                    size: "70%",
                },
            },
        },
        labels: [
            "Counselling",
            "Induction into Armed Forces",
            "Jobs",
            "Jobs for Persons with Disability",
            "Jobs for Women",
            "Local Services",
            "Self Employment",
            "Skill Training",
        ],
        colors: [
            "#4329EA",
            "#6853ED",
            "#8F80F0",
            "#BEB6F4",
            "#BEB6F499",
            "#C2BBF580",
            "#DEDAF780",
            "#D9D9D94D",
        ],
        dataLabels: {
            style: {
                fontSize: "16px", // Adjust font size of labels
            },
        },
    };

    const generateSeriesData = () => {
      // Check if static data is available, otherwise return an empty array
      if (true) {
          // Provide static data as an example
          return [22, 20, 50, 25, 15, 8, 12, 10];
      }
  
      const labels = optionschart.labels;
      const seriesData = labels.map((label) => traffic[label]);
  
      return seriesData;
  };
  
  const series = generateSeriesData();

    return (
        <div className="h-screen bg-gray-100 ">
            <Navbar />
            <div className='p-10'>
        <h1 className='font-medium'>User Interaction</h1>
        <h1 className='font-medium text-gray-400 text-sm'>Control and analyse your data in the most convenient way</h1>
      </div>
            <div className="mx-auto rounded-lg mb-12 w-3/5 bg-white px-10 text-[20px] text-center">
                {/* <div className="font-bold">How users found about PGRKAM</div> */}
                <div className="py-10 text-[16px]">
                    <ReactApexChart
                        options={optionschart}
                        series={series}
                        type="donut"
                        height={300} // Adjust the height as needed
                    />
                </div>
            </div>
        </div>
    );
};

export default TrafficSource;
