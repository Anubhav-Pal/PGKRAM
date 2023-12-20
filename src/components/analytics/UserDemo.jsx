import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Navbar from "../Navbar";
import axios from "axios";

const UserDemo = () => {
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
  console.log(options)
  console.log(user)
  console.log(retention)
  console.log(data)
  console.log(traffic);

  
  return (
    <div className="h-screen bg-gray-100 ">
      <Navbar />
<div className="p-10">
  <div className="font-bold text-[20px]">User Demographics</div>
  <div className="text-gray-500">Control and analyse your data in the most convenient way</div>
</div>

      {/* <div className="mx-auto rounded-lg my-12 w-3/5 bg-white p-10 text-[20px] text-center">
        <div className="font-bold">How users found about PGRKAM</div>
        <div className="py-10 text-[16px]">
          
        </div>
      </div> */}
    </div>
  );
};

export default UserDemo;
