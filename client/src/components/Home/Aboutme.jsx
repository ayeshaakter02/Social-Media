import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

const Aboutme = () => {
  return (
    <div className='mt-8.25 w-70.75 bg-white py-7.25 px-6.75 rounded-[15px]'>
      <div className="flex justify-between items-center">
        <h2 className='font-poppins font-bold text-sm text-[#3E3F5E]'>About Me</h2>
        <HiDotsHorizontal />
      </div>
      <p className='font-poppins font-normal text-xs text-[#AFB0C0] mt-7.25 mb-4.5'>Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
      <div className='font-poppins text-xs text-[#AFB0C0] flex w-45.75 justify-between'>
        <p className='font-bold'>Joined:</p>
        <p className='font-normal'>22 November 2008</p>
      </div>
      <div className='font-poppins text-xs text-[#AFB0C0] flex w-23.25 justify-between'>
        <p className='font-bold'>City:</p>
        <p className='font-normal'>Dhaka</p>
      </div>
      <div className='font-poppins text-xs text-[#AFB0C0] flex w-25.25 justify-between'>
        <p className='font-bold'>Age:</p>
        <p className='font-normal'>18 years</p>
      </div>
    </div>
  )
}

export default Aboutme
