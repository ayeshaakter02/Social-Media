import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagenation = () => {
  return (
    <div className='w-86.75 ml-208 mb-27.25 bg-white flex items-center px-5 py-4.25 mt-10 rounded-[15px]'>
        <IoIosArrowBack className='text-[#AFB0C0] w-6.25 h-6.25 cursor-pointer'/>
        <div className="flex gap-5 ml-7.5 mr-5.5 ">
            <p className='pagenation-num'>01</p>
            <p className='pagenation-num'>02</p>
            <p className='pagenation-num'>03</p>
            <p className='pagenation-num'>04</p>
            <p className='pagenation-num'>05</p>
            <p className='pagenation-num'>06</p>
        </div>
        <IoIosArrowForward className='text-[#AFB0C0] w-6.25 h-6.25 cursor-pointer'/>
    </div>
  )
}

export default Pagenation