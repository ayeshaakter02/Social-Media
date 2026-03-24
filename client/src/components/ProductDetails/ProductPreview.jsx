import React from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ProductPreview = () => {
  return (
    <div className="flex gap-3 items-start font-poppins">
      {/* LEFT SIDE (Slider area) */}
      <div className="flex items-center gap-2.5">
        {/* Arrows + Thumbnails */}
        <div className="flex flex-col items-center gap-1.5">
          <button className="py-1.75 pl-4.25 pr-4.5 bg-white rounded-[5px] text-[#23D2E2]">
            <IoIosArrowForward className="w-6.25 h-6.25" />
          </button>
          <div className="p-1.5 bg-white rounded-[15px] flex flex-col gap-1.5">
            <div className="w-12 h-12 bg-[#615DFA] rounded-md"></div>
            <div className="w-12 h-12 bg-[#615DFA] rounded-md"></div>
            <div className="w-12 h-12 bg-[#615DFA] rounded-md"></div>
          </div>

          <button className="py-1.75 pl-4.25 pr-4.5 bg-white rounded-[5px] text-[#23D2E2]">
            <IoIosArrowBack className="w-6.25 h-6.25" />
          </button>
        </div>

        {/* Main Image */}
        <div className="w-207.5 h-140 bg-[#615DFA] rounded-[15px]"></div>
      </div>

      {/* RIGHT SIDE (Card) */}
      <div className="bg-white rounded-[15px] pt-7.5 pb-7.75 pl-6.75 pr-7 w-71">
        {/* Price */}
        <div className="flex items-center justify-center text-[49px] font-medium mb-6.5">
          <FaDollarSign className="text-[#2fb6c4]" />
          <h1 className=" text-black">39.00</h1>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-7.25">
          <div className="text-center">
            <p className="font-semibold text-2xl text-[#181828]">1,320</p>
            <p className="text-[#AFB0C0] text-sm font-medium">Sales</p>
          </div>

          <div className="w-px h-12.75 bg-[#AFB0C0]"></div>

          <div className="text-right">
            <p className="font-semibold text-2xl text-[#181828]">4.2/5</p>
            <div className="flex justify-end text-[#FCE730] mt-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="orderSummary-btn w-57.25">
          Procced to checkout
        </button>
      </div>
    </div>
  );
};

export default ProductPreview;
