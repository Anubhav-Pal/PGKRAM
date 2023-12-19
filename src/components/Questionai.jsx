import React from 'react'
import Questionui from './Questionui'

const Questionai = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10 '>
        <div className='w-[80vw] bg-white shadow-2xl p-10'>
            <div>
                Skip Question
            </div>
        <Questionui/>
        <div>NEXT</div>
        </div>
    </div>
  )
}

export default Questionai