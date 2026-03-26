"use client"
import LogRegister from '@/components/common/LogRegister'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const page = () => {
    return (
        <div className='my-33 flex gap-[110.46px] mx-auto w-246.5 font-poppins bg-[#F5F5F5]'>
            <LogRegister />
            <div className='px-3.75 pt-3.75 pb-7.75 border border-[#F5F5F5] shadow-[0_0_4px_0_rgba(0,0,0,0.25)] rounded-[5px]'>
                <div className='space-y-3.75'>
                    <input type="text" placeholder='First Name' className='log-reg-input' />
                    <input type="text" placeholder='Last Name' className='log-reg-input' />
                    <input type="text" placeholder='Email Address' className='log-reg-input' />
                    <input type="text" placeholder='Password' className='log-reg-input' />
                    <h3 className='font-normal text-[17px] leading-4 '>Date of birth:</h3>
                    <div className="flex gap-5">
                        <div className='reg-select'>
                            <p className='font-normal text-[17px] leading-4'>29</p>
                            <IoIosArrowDown />
                        </div>
                        <div className='reg-select'>
                            <p className='font-normal text-[17px] leading-4'>Feb</p>
                            <IoIosArrowDown />
                        </div>
                        <div className='reg-select'>
                            <p className='font-normal text-[17px] leading-4'>2022</p>
                            <IoIosArrowDown />
                        </div>
                    </div>
                    <h3 className='font-normal text-[17px] leading-4 '>Date of birth:</h3>
                    <div className="flex gap-5">
                        <div className='reg-select'>
                            <p className='font-normal text-[17px] leading-4'>Male</p>
                            <input type="radio" name="payment" />
                        </div>
                        <div className='reg-select'>
                            <p className='font-normal text-[17px] leading-4'>Female</p>
                            <input type="radio" name="payment" defaultChecked />
                        </div>
                        <div className='reg-select'>
                            <p className='font-normal text-[17px] leading-4'>Custom</p>
                            <input type="radio" name="payment" />
                        </div>
                    </div>
                </div>
                <Link href={'/'} className='inline-block text-center bg-[#166FE5] rounded-[5px] text-xl w-123.25 font-bold text-white pt-5.5 pb-5.75 mt-10.25 mb-3.75'>Sign Up</Link >
                <div className='flex justify-center'>
                    <a className='text-[#1877F2] font-medium text-sm border-b' href="">Forgotten password?</a>
                </div>
                <div className='my-6.25 w-123.25 border-b border-[#D9D9D9]'></div>
                <div className='flex justify-center'>
                    <Link href={'/login'} className='font-bold text-xl text-white bg-[#36A420] rounded-[5px] pl-16.75 pr-17 pt-5.5 pb-5.75'>Already have </Link>
                </div>
            </div>
        </div>
    )
}

export default page
