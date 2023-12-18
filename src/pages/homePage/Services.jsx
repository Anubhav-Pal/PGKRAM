import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
        <div className='shadow-inner my-6'>

            {/* 1st row */}
            <div className='p-12 flex m-auto'>
                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                    <div className='text-[35px] bg-violet-400 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    <div className='font-bold my-2'>Jobs</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>

                
                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                <Link to='https://www.pgrkam.com/aboutus'>
                    <div className='text-[35px] bg-blue-400 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    </Link>
                    <div className='font-bold my-2'>Skill Training</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>

                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                <Link to='https://www.pgrkam.com/self-employment'>
                    <div className='text-[35px] bg-yellow-300 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    </Link>
                    <div className='font-bold my-2'>Self Employment</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>

                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                <Link to='https://www.pgrkam.com/local-services'>
                    <div className='text-[35px] bg-green-300 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    </Link>
                    <div className='font-bold my-2'>Local Services</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>
            </div>

            {/* 2nd row */}
            <div className='p-12 flex m-auto'>
                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                    <div className='text-[35px] bg-red-600 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    <div className='font-bold my-2'>Jobs For Women</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>

                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                    <div className='text-[35px] bg-pink-400 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    <div className='font-bold my-2'>Induction into Armed Forces</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>

                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                <Link to='https://www.pgrkam.com/search-results/?pwd=1'>
                    <div className='text-[35px] bg-cyan-400 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    </Link>
                    <div className='font-bold my-2'>Jobs For Persons With Disablility</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>

                <div className='w-1/5 flex flex-col justify-center items-center m-auto'>
                <Link to='https://www.pgrkam.com/counselling-sessions'>
                    <div className='text-[35px] bg-green-900 border-gray-600 border-4 rounded-full p-2'><FaUserAlt/></div>
                    </Link>
                    <div className='font-bold my-2'>Counselling</div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services