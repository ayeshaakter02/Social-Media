import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";

const OrderSummary = () => {
  return (
    <div className="w-[288px] bg-white rounded-[15px] pt-7.25 pl-6.5 pb-13 pr-4.75 ml-3.75 font-poppins">
      
      {/* Title */}
      <h2 className="text-[17px] font-medium mb-4.25">
        Order totals
      </h2>

      {/* Price */}
      <div className="flex items-center justify-center text-[49px] font-medium mb-12.25">
        <FaDollarSign className="text-[#2fb6c4]" />
        <h1 className=" text-black">39.00</h1>
      </div>

      {/* Details */}
      <div className="space-y-2.75 text-xs mb-13.25 font-medium">
        <div className="flex justify-between text-[#AFB0C0] pr-1.75">
          <span>Cart(3)</span>
          <span className="flex items-center"><BsCurrencyDollar className="text-[#23D2E2]"/>44.00</span>
        </div>

        <div className="flex justify-between text-[#AFB0C0]">
          <span>Code</span>
          <span className="flex items-center">- <BsCurrencyDollar className="text-[#23D2E2]"/>15.00</span>
        </div>

        <div className="flex justify-between text-[#AFB0C0] pr-1.75">
          <span>Total</span>
          <span className="flex items-center"><BsCurrencyDollar className="text-[#23D2E2]"/>39.00</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-2.5">
        <button className="orderSummary-btn">
          Procced to checkout
        </button>

        <button className="orderSummary-btn">
          Update cart
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;