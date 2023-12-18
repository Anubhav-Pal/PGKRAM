import React, { useState } from 'react';
import Demographics from '../components/analytics/Demographics';
import Insights from '../components/analytics/Insights';
import Dashboard from '../components/analytics/Dashboard';
import JobSuccess from '../components/analytics/JobSuccess';
import Navbar from '../components/Navbar';

const Analytics = () => {
  const [activeButton, setActiveButton] = useState('dashboard');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className=''>
      <Navbar/>
      <div className=' items-center flex gap-10 p-5 text-[12px] text-gray-600 shadow-md'>

        <div className={`relative group flex flex-col items-center`}>
          <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('dashboard')}>
            Dashboard
          </button>
          {activeButton === 'dashboard' && (
            <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>

          )}
        </div>

        <div className={`relative group  flex flex-col items-center`}>
          <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('demographic')}>
            Demographic of users
          </button>
          {activeButton === 'demographic' && (
            <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>

          )}
        </div>
        <div className={`relative group  flex flex-col items-center`}>
          <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('jobSuccess')}>
          Job success failure ratio
          </button>
          {activeButton === 'jobSuccess' && (
            <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>

          )}
        </div>
            

        <div className={`relative group  flex flex-col items-center`}>
          <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('salaryInsights')}>
            Salary Insights
          </button>
          {activeButton === 'salaryInsights' && (
            <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>
          )}
        </div>
      </div>

      {/* Render content based on the active button */}
      <div>
        {activeButton === 'dashboard' && <Dashboard />}
        {activeButton === 'demographic' && <Demographics />}
        {activeButton === 'jobSuccess' && <JobSuccess />}
        {activeButton === 'salaryInsights' && <Insights />}
      </div>
    </div>
  );
};

export default Analytics;
