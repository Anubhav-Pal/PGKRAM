// import React, { useState } from 'react';
// import Demographics from '../components/analytics/Demographics';
// import Insights from '../components/analytics/Insights';
// import Dashboard from '../components/analytics/Dashboard';
// import JobSuccess from '../components/analytics/JobSuccess';
// import Navbar from '../components/Navbar';
// import FirebaseAnalyticsTest from '../components/analytics/FirebaseAnalyticsTest';

// const Analytics = () => {
//   const [activeButton, setActiveButton] = useState('dashboard');

//   const handleButtonClick = (buttonName) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className=''>
//       <Navbar/>
//       <div className=' items-center flex gap-10 p-5 text-[12px] text-gray-600 shadow-md'>

//         <div className={`relative group flex flex-col items-center`}>
//           <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('dashboard')}>
//             Dashboard
//           </button>
//           {activeButton === 'dashboard' && (
//             <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>

//           )}
//         </div>

//         <div className={`relative group  flex flex-col items-center`}>
//           <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('demographic')}>
//             Demographic of users
//           </button>
//           {activeButton === 'demographic' && (
//             <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>

//           )}
//         </div>
//         <div className={`relative group  flex flex-col items-center`}>
//           <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('jobSuccess')}>
//           Job success failure ratio
//           </button>
//           {activeButton === 'jobSuccess' && (
//             <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>

//           )}
//         </div>


//         <div className={`relative group  flex flex-col items-center`}>
//           <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('salaryInsights')}>
//             Salary Insights
//           </button>
//           {activeButton === 'salaryInsights' && (
//             <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>
//           )}
//         </div>
//         <div className={`relative group  flex flex-col items-center`}>
//           <button className={`hover:text-gray-900`} onClick={() => handleButtonClick('FirebaseAnalyticsTest')}>
//           FirebaseAnalyticsTest
//           </button>
//           {activeButton === 'FirebaseAnalyticsTest' && (
//             <div className="mt-1 rounded-2xl bg-violet-500 h-1 w-4"></div>
//           )}
//         </div>
//       </div>

//       {/* Render content based on the active button */}
//       <div>
//         {activeButton === 'dashboard' && <Dashboard />}
//         {activeButton === 'demographic' && <Demographics />}
//         {activeButton === 'jobSuccess' && <JobSuccess />}
//         {activeButton === 'salaryInsights' && <Insights />}
//         {activeButton === 'FirebaseAnalyticsTest' && <FirebaseAnalyticsTest />}
//       </div>
//     </div>
//   );
// };

// export default Analytics;


import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Analytics = () => {
  return (
    <div className='h-screen bg-gray-100'>
      <Navbar />
      <div className='p-10'>

        <div>
          <h1 className='font-medium '>Analytic Dashboard</h1>
          <h1 className='font-medium text-gray-400 text-sm'>Control and analyse your data in the most convenient way</h1>
        </div>
        <div className='flex flex-col justify-between gap-5 mt-10'>
          <div className='flex items-center justify-between my-14'>
            <Link to='/analytics/retention-rate' className='bg-white w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>Retention Rate</button></div>
            </Link>
            <Link to='/analytics/traffic-source' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>Traffic Source</button></div>
            </Link>
            <Link to='/analytics/active-user' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>Active User</button></div>
            </Link>
            <Link to='/analytics/user-demo' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>User Demographics</button></div>
            </Link>
          </div>
          <div className='flex items-center justify-between'>
            <Link to='/analytics/device-type' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>Device Type</button></div>
            </Link>
            <Link to='/analytics/success-failure' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>Success/Failure</button></div>
            </Link>
            <Link to='/analytics/job-avail' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>Job Availability</button></div>
            </Link>
            <Link to='/analytics/user-interaction' className='bg-white  w-2/12 text-center text-gray-700 p-8 font-medium rounded-md border-purple-600 border-2'>
              <div><button>User Interaction</button></div>
            </Link>
          </div>
        </div>



      </div>

    </div>
  )
}

export default Analytics