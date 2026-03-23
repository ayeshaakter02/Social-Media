import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const ProductHeader = () => {
  return (
    <div className="mt-5.75 font-poppins">
      <div>
        <p className="font-normal text-sm text-[#AFB0C0]">BROWSE PRODUTS</p>
        <h2 className="font-medium text-2xl text-[#24234B] mt-1">
          Digital Items
        </h2>
      </div>
      <div className="flex w-296 bg-white pt-6.5 pb-7.25 px-5 rounded-[7px] mt-6">
        <input
          type="text"
          className="w-75 border border-[#D9D9D9] outline-none rounded-[15px] font-medium text-[17px] text-[#D9D9D9] px-3.75 pt-2.5 pb-2.25"
          placeholder="Search items"
        />
        <button className="w-15.75 h-12 flex items-center justify-center rounded-[10px] bg-[#23D2E2] text-white ml-3">
          <FaSearch className="w-6.25 h-6.25" />
        </button>
        {/* Dropdown 1 */}
      <div className="w-75 border border-[#D9D9D9] outline-none rounded-[15px] flex items-center gap-26.5 px-5 pt-2.5 pb-2.25 text-[17px] font-medium whitespace-nowrap cursor-pointer mx-[19px]">
        <span>Date Published</span>
        <FaChevronDown className="w-6.25 h-6.25" />
      </div>
      {/* Dropdown 2 */}
      <div className="w-75 border border-[#D9D9D9] outline-none rounded-[15px] flex items-center gap-26.5 px-5 pt-2.5 pb-2.25 text-[17px] font-medium whitespace-nowrap cursor-pointer">
        <span>Descending</span>
        <FaChevronDown className="w-6.25 h-6.25" />
      </div>
      {/* Button */}
      <button className="ml-3.25 px-4 py-2.75 rounded-[7px] text-sm text-white bg-[#615DFA] font-medium">
        Apply Filters
      </button>
      </div>
    </div>
  );
};

export default ProductHeader;
