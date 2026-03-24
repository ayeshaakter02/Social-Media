import React from 'react'
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

const ItemCard = () => {
  return (
    <div className='w-221 bg-[#D9D9D9] flex font-poppins py-5 px-7'>
      <div className="w-68.25 flex justify-between">
        <div className='w-23.5 h-15 bg-[#615DFA] rounded-[15px]'></div>
        <div>
            <h1 className='font-medium text-sm text-[45437F]'>Twitch stream ui pack</h1>
            <p className='font-medium text-[13px]'>Stream packs</p>
            <p className='text-[#AFB0C0] font-normal text-xs'>ABM shawon</p>
        </div>
        <div className='border border-[#D9D9D9] rounded-2xl w-24 py-[7.47px] flex items-center ml-30.75 mr-27.75'>
            <p className='flex justify-center items-center ml-11'>1</p>
            <div>
                <div className='w-[9.38px] h-[6.06px] text-[#3E3F5E] mb-[20.94px]'>
                    <MdKeyboardArrowDown />
                </div>
                <div>
                    <MdKeyboardArrowUp />
                </div>
                
            </div>
        </div>
        <div className="flex font-medium text-[17px]">
            <div className='text-[#23D2E2] mb-1'><BsCurrencyDollar /></div>
            <p>12.00</p>
        </div>
        <div className="flex bg-[#EA5050] rounded-full pt-2.25 pl-2.25 pr-2 pb-2 text-white ml-34.5">
            <MdDelete />
        </div>
      </div>
    </div>
  )
}

export default ItemCard
