"use client"
import React from 'react'
import {Menu, Ellipsis, Search,ShoppingCart, MessageCircle,Bell, Settings } from 'lucide-react';

const Header = () => {
  return (
    <div className='bg-[#615DFA] pt-4 py-3.5'>
          <div className='max-w-[1628px] mx-auto flex  items-center'>
      <div className='pl-6 flex gap-3 items-center'>
        <img src="./images/logo.png" alt="" />
        <h2 className='font-poppins text-white text-xs font-bold'>Socinex</h2>
      </div>
      <div className='ml-43.5'>
        <ul className='flex gap-12 items-center'>
          <li className='text-white'>
            <Menu />
          </li>
          <li className='menu'>Careers</li>
          <li className='menu'>Store</li>
          <li className='menu'>FAQ</li>
          <li className='text-white'><Ellipsis /></li>
        </ul>
      </div>
      <div className='ml-15.75 w-103.75 rounded-[11px] bg-[#4E4AC8] relative py-4.5 px-4'>
        <input className='text-[#6965E0]' placeholder='Search here ....' type="text" />
        <div className='absolute text-[#6763DF] top-[30%] right-[26px] w-3.5 h-3.5'>
          <Search />
        </div>
      </div>
      <div className='ml-22.5'>
        <div className='max-w-27.75 flex gap-11.5 font-poppins font-normal text-xs text-white mb-0.75 whitespace-nowrap'>
        <p>Next</p>
        <p>35 EXP</p>
      </div>
      <div className='bg-[#4E4AC8] h-0.75 max-w-27.75'><div className='max-w-[83px] bg-[#41EFFF] h-0.75'></div></div>
      </div>
      <div className='ml-10'>
        <ul className='flex gap-8.25'>
          <li className='w-8 h-px bg-[#7A77FD] rotate-90 mt-2.75'></li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'>
            <ShoppingCart />
          </li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'>
            <MessageCircle />
          </li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'>
            <Bell />
          </li>
          <li className='w-8 h-px bg-[#7A77FD] rotate-90 mt-2.75'></li>
          <li className='w-4.5 h-4.5 text-[#7A77FD]'><Settings /></li>
        </ul>
      </div>
      
    </div>
    </div>
  )
}

export default Header