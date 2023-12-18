import React from 'react'
import Skillai from '../../components/Skill-ai'

const AIInterview = () => {
  return (
    <div>
    <div className=' m-10 h-[50vh] shadow-2xl p-10'>
      <div className='text-gray-600 my-8'>Choose your skills, and let our AI generate tailored questions</div>

      <div>
        <Skillai skill='python'></Skillai>
        <Skillai skill='python'></Skillai><Skillai skill='python'></Skillai><Skillai skill='python'></Skillai><Skillai skill='python'></Skillai><Skillai skill='python'></Skillai><Skillai skill='python'></Skillai><Skillai skill='python'></Skillai>
      </div>
    </div>
    </div>
  )
}

export default AIInterview