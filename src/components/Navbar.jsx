import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='bg-[#ED9017] h-[50px] flex justify-end pr-12 text-[13px] items-center font-[400]'>English  / ਪੰਜਾਬੀ | FAQs |</div>

    <div className='bg-navbg py-2'>
        <div className='flex justify-between items-center mx-12'>
            <div className='flex'>
            <div><img src={logo} alt="logo" /></div>
            <div className='ml-6'>
                <div className='text-[16px] font-[700]'>PUNJAB GHAR GHAR ROZGAR</div>
                <div className='text-[13px] font-[500]'>
                Department of Employment Generation
                </div>
                <div className='text-[13px] font-[500]'>
                Skill Development & Training-Govt. Of Punjab, India
                </div>
            </div>
            </div>
            <div className='text-[13px] font-[500]'><ul className='flex '>
            <li className='mx-3'>HOME</li>
            <li className='mx-3'>ABOUT US</li>
            <li className='mx-3'>CONTACT US</li>
            <li className='mx-3'><Link to='/analytics'>ADMIN LOGIN</Link></li>
           </ul></div>
        </div>

        <div className='text-[12px] flex justify-between mx-12'>
           <div className='bg-[#FF0] max-w-fit px-4'>List of registered Recruiting Agents in Punjab-for sending abroad on work visa</div>
           <div className='bg-[#15BD15] text-white max-w-fit px-4'>Vacancies advertised by Punjab Public Services Commission are available at https://ppsc.gov.in/</div>
        </div>
    </div>
    </>
  )
}

export default Navbar