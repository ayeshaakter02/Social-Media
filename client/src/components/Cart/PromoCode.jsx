"use client";
import React from 'react'

const PromoCode = () => {
  return (
    <div className="w-221 bg-white rounded-[15px] 
    flex flex-col md:flex-row items-center px-7 pt-6.25 pb-6 font-poppins">

      {/* Text */}
      <p className="text-[#AFB0C0] text-[17px] font-medium w-108.75">
        If you have promotional or a discount code, please
enter it right here to redeem it.
      </p>

      {/* Input + Button */}
      <div className="ml-12.25 flex gap-3.25">
        
        <input
          type="text"
          placeholder="Promo code"
          className="w-54.25 px-3.25 py-3.5 rounded-xl text-[#AFB0C0]
          border border-[#D9D9D9] focus:outline-none text-[13px] font-medium"
        />

        <button className="bg-[#615DFA] text-white 
        p-3.75 rounded-[15px] text-xs font-medium whitespace-nowrap">
          Redeem code
        </button>

      </div>
    </div>
  )
}

export default PromoCode