import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import map from "../../assets/map.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div>
            <div className='flex items-center h-[] justify-between bg-green-950'>

                {/* social media links */}
                <div className=''>
                    <div className=' bg-[#4a5893] text-white px-2 py-3 flex justify-center items-center'><FaFacebookF /></div>
                    <div className=' bg-[#7baae8] text-white px-2 py-3 flex justify-center items-center'><FaTwitter /></div>
                    <div className=' bg-[#6a6a6a] text-white px-2 py-3 flex justify-center items-center'><AiFillInstagram /></div>
                    <div className=' bg-[#a12517] text-white px-2 py-3 flex justify-center items-center'><TfiYoutube /></div>
                </div>

                {/* map */}
                <div>
                    <img src={map} alt="map" />
                </div>

                {/* form */}
                <div className='text-center'>
                    <div className='text-white font-semiboldbold text-[20px] text-left mb-2'>Fill out the form below to search Jobs</div>

                    {/* taking filters  */}
                    <div className='flex'>
                        <div className='bg-white text-[12px] text-gray-600 p-2 border-black'>
                            <label htmlFor="jobType"></label>
                            <select id="jobType">
                                <option value="option1">Select Job type</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className='bg-white text-[12px] text-gray-600 p-2 border-black'>
                            <label htmlFor="qualification"></label>
                            <select id="qualification">
                                <option value="option1">Select Qualification</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className='bg-white text-[12px] text-gray-600 p-2 border-black'>
                            <label htmlFor="experience"></label>
                            <select id="experience">
                                <option value="option1">Experience upto (in years)</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>

                        <div className='bg-white text-[12px] text-gray-600 p-2 border-black'>
                            <label htmlFor="place"></label>
                            <input className='border-none' id="place" type='text' placeholder='Place of Posting' />
                        </div>
                    </div>

                    {/* or line */}
                    <div className='text-white text-[13px]'>-----OR-----</div>

                    <div className='bg-white text-[12px] text-gray-600 p-2 border-black'>
                        <input className='w-full h-full' type='text' placeholder='Enter Job Title or Organization Name' />
                    </div>

                    <button className=' rounded-md bg-[#ED9017] px-3 py-1 my-2 text-white'>Search Jobs</button>

                    {/* numbers tab */}
                    <div className='flex justify-evenly items-center'>

                        <div className=' m-auto mx-2'>
                            <div className='bg-white rounded-tl-lg rounded-tr-lg p-1'>20451</div>
                            <div className='bg-[#ED9017] p-1 rounded-bl-lg rounded-br-lg'>Available Govt. Jobs</div>
                        </div>

                        <div className=' m-auto mx-2'>
                            <div className='bg-white rounded-tl-lg rounded-tr-lg p-1'>20451</div>
                            <div className='bg-[#ED9017] p-1 rounded-bl-lg rounded-br-lg'>Available Govt. Jobs</div>
                        </div>

                        <div className=' m-auto mx-2'>
                            <div className='bg-white rounded-tl-lg rounded-tr-lg p-1'>20451</div>
                            <div className='bg-[#ED9017] p-1 rounded-bl-lg rounded-br-lg'>Available Govt. Jobs</div>
                        </div>

                        <div className=' m-auto mx-2'>
                            <div className='bg-white rounded-tl-lg rounded-tr-lg p-1'>20451</div>
                            <div className='bg-[#ED9017] p-1 rounded-bl-lg rounded-br-lg'>Available Govt. Jobs</div>
                        </div>
                    </div>
                </div>

                {/* reg form */}
                <div className='bg-black mr-12 h-full text-center p-2'>
                    <div className='text-black text-[20px] bg-[#ED9017] rounded-full  m-auto mt-6 justify-center flex items-center w-full p-3 '>Registration<span className='text-white text-[12px] border-white border-2 p-1 rounded-full'>Free</span></div>
                    <div className='text-white my-3'>-----OR-----</div>
                    <div className='my-2 '>
                        <input className='p-1 w-full py-2 p-3 rounded-full text-gray-600' type='text' placeholder='Enter username' />
                    </div>
                    <div>
                        <input className='p-1 w-full py-2 p-3 rounded-full text-gray-600' type='password' placeholder='Enter password' />
                    </div>

                    <div className='text-white md:hidden px-4 my-3'>Forgot password | Login using OTP</div>
                    <button className='bg-[#ED9017] font-bold w-full py-2  rounded-2xl px-3 md:mt-[15px] text-white '><Link to='/user'>Login</Link></button>
                </div>

            </div>
        </div>
    )
}

export default HeroSection