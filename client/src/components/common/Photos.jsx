import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

const Photos = () => {
  return (
    <div className='mt-3 bg-white rounded-[15px] w-70.75 px-7.25 pt-4.75 pb-7.25'>
        <div className="flex justify-between items-center mb-4.25">
            <p className='font-poppins font-bold text-xs'>Photos <span className='text-[#23D2E2]'>37</span></p>
            <HiDotsHorizontal className='font-poppins font-normal text-[30px]'/>
        </div>
        <div className="grid grid-cols-2 gap-3.75">
            <div className='bg-[#615DFA] w-26.25 h-25 rounded-[15px]'></div>
            <div className='bg-[#24234B] w-26.25 h-25 rounded-[15px]'></div>
            <div className='bg-[#615DFA] w-26.25 h-25 rounded-[15px]'></div>
            <div className='bg-[#24234B] w-26.25 h-25 rounded-[15px]'></div>
            <div className='bg-[#615DFA] w-26.25 h-25 rounded-[15px]'></div>
            <div className='bg-[#41EFFF] w-26.25 h-25 rounded-[15px] flex justify-center items-center'><p className='text-white'>32+</p></div>
        </div>
    </div>
  )
}

export default Photos