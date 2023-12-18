import React, { useState } from 'react';
import Profile from './Profile'; // Import your Profile component

const ProfileOptions = () => {
  const [viewProfile, setViewProfile] = useState(false);

  const handleViewProfileClick = () => {
    setViewProfile(true);
    console.log("opening profile");
  };

  if (viewProfile) {
    return <Profile />;
  }

  return (
    <div className="absolute right-[40px] bg-white top-[230px] text-left z-10 w-1/5 p-4">
      <ul className='flex flex-col justify-center items-center'>
        <div className='flex m-auto w-full justify-evenly items-center'>
          <div className='border-black border-2 w-10 h-10 rounded-full flex justify-center items-center'>icon</div>
          <div className='font-bold'>Vrishhti Goel</div>
        </div>
        <button
          className='px-1 w-3/4 rounded-full border-[#4329EA] border-2 text-center my-2'
          onClick={handleViewProfileClick}
        >
          View Profile
        </button>
        <div className='w-full h-[2px] bg-gray-300'></div>
        <li className='p-2'>My Jobs</li>
        <div className='w-full h-[2px] bg-gray-300'></div>
        <li className='p-2'>AI interview</li>
        <div className='w-full h-[2px] bg-gray-300'></div>
        <li className='p-2'>Scholarship</li>
      </ul>
    </div>
  );
}

export default ProfileOptions;
