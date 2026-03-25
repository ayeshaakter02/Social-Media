"use client"
import LogRegister from '@/components/common/LogRegister'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='mt-33 flex gap-[110.46px] mx-auto w-246.5 font-poppins bg-[#F5F5F5]'>
      <LogRegister/>
      <div className='px-3.75 pt-3.75 pb-7.75 border border-[#F5F5F5] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] rounded-[5px]'>
        <div className='space-y-3.75'>
          <input type="text" placeholder='Email Address' className='log-reg-input' />
          <input type="text" placeholder='Password' className='log-reg-input' />
          <Link href={'/'} className='bg-[#166FE5] rounded-[5px] text-xl w-123.25 font-bold text-white pt-5.5 pb-5.75 inline-block text-center'>Log In</Link>
          <div className='flex justify-center'>
            <a className='text-[#1877F2] font-medium text-sm border-b' href="">Forgotten password?</a>
          </div>

        </div>
        <div className='my-6.25 w-123.25 border-b border-[#D9D9D9]'></div>
        <div className='flex justify-center'>
          <Link href={'/register'} className='font-bold text-xl text-white bg-[#36A420] rounded-[5px] px-8 pt-5.5 pb-5.75'>Create New Account</Link>
        </div>

      </div>
    </div>
  )
}

export default page