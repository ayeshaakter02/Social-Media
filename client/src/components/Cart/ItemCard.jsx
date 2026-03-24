"use client";

import React from "react";
import { MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";

const ItemCard = () => {
  return (
    <div className="w-221 mb-5.75 bg-white rounded-[15px] 
    flex items-center px-5.5 py-5 font-poppins">

      {/* LEFT */}
      <div className="flex items-center gap-5.5 whitespace-nowrap">
        <div className="w-23.5 h-15 bg-[#615DFA] rounded-[15px]"></div>
        <div>
          <h1 className="font-medium text-sm text-[#45437F]">
            Twitch stream ui pack
          </h1>
          <p className="font-medium text-[13px]">Stream packs</p>
          <p className="font-normal text-[#AFB0C0] text-xs">Ayesha Akter</p>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="flex items-center ml-30.75 gap-27.5 mr-34.5">
        
        {/* Quantity */}
        <div className="border border-[#D9D9D9] rounded-[15px] px-2.75 pl-8.25 py-0.75 flex items-center gap-5">
          <p className="text-[#3E3F5E] font-medium text-[17px]">1</p>

          <div className="flex flex-col text-[#3E3F5E]">
            <MdKeyboardArrowUp className="cursor-pointer" />
            <MdKeyboardArrowDown className="cursor-pointer" />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center text-[17px] font-medium">
          <BsCurrencyDollar className="text-[#23D2E2]" />
          <p>12.00</p>
        </div>
      </div>

      {/* DELETE */}
      <button className="bg-[#EA5050] text-white p-3 rounded-full">
        <MdDelete />
      </button>
    </div>
  );
};

export default ItemCard;