import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const PersonalInfo = () => {
  return (
    <div className='mt-4 w-70.75 bg-white py-8.75 pl-6.75 pr-8.75 rounded-[15px] font-poppins'>
          <div className="flex justify-between items-center">
            <h2 className='font-bold text-sm text-[#3E3F5E]'>Personal Info</h2>
            <HiDotsHorizontal className='font-bold text-sm text-[#3E3F5E]'/>
          </div>
          <div className='mt-6.5 text-xs text-[#AFB0C0] '>
            <div className='flex w-53.25 justify-between'>
            <p className='font-bold'>Email:</p>
            <p className='font-normal'>ayesha.a@gmail.com</p>
          </div>
          <div className='flex w-36.5 justify-between my-3.75'>
            <p className='font-bold'>Birthday:</p>
            <p className='font-normal'>21 Feb 2002</p>
          </div>
          <div className='flex w-55.5 justify-between'>
            <p className='font-bold'>Occupation:</p>
            <p className='font-normal'>MernStack Developer</p>
          </div>
          <div className='flex w-30.75 justify-between my-3.75'>
            <p className='font-bold'>Status:</p>
            <p className='font-normal'>unmarried</p>
          </div>
          <div className='flex w-40.5 justify-between'>
            <p className='font-bold'>Birthplace:</p>
            <p className='font-normal'>Narayanganj</p>
          </div>
          </div>
          
        </div>
  )
}

export default PersonalInfo