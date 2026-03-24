"use client";
import { BsCurrencyDollar } from "react-icons/bs";

const CheckoutOrderSum = () => {
  return (
    <div className="w-[384px] bg-white rounded-2xl px-6.5 pt-6.75 pb-8 font-poppins">
      {/* Title */}
      <h2 className="text-[17px] font-medium text-[#181828] mb-7.75">
        Order Summary
      </h2>

      {/* Items */}
      <div className="space-y-5">
        {[1, 2, 3, 4].map((item, i) => (
          <div key={i} className="flex justify-between">
            <p className="text-[#45437F] text-sm font-medium">
              Twitch stream ui pack
            </p>
            <span className="flex items-center text-xs font-medium">
              <BsCurrencyDollar className="text-[#23D2E2]" />
              44.00
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="mt-8.25 mb-5.25 border-[#AFB0C0]" />

      {/* Summary */}
      <div className="space-y-2.75 text-xs font-medium">
        <div className="flex justify-between">
          <p className="text-[#AFB0C0]">Cart(3)</p>
          <span className="flex items-center">
            <BsCurrencyDollar className="text-[#23D2E2]" />
            44.00
          </span>
        </div>

        <div className="flex justify-between">
          <p className="text-[#AFB0C0]">Code</p>
          <span className="flex items-center">
            -<BsCurrencyDollar className="text-[#23D2E2]" />
            15.00
          </span>
        </div>

        <div className="flex justify-between">
          <p className="text-[#AFB0C0]">Total</p>
          <span className="flex items-center">
            <BsCurrencyDollar className="text-[#23D2E2]" />
            39.00
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr className="mt-5.25 border-[#AFB0C0]" />

      {/* Big Price */}
      <div className="text-center my-2.75">
        <h1 className="text-[49px] font-medium">
          <span className="text-[#23D2E2]">$</span>39.00
        </h1>
      </div>

      <hr className=" border-[#AFB0C0]" />

      {/* Payment */}
      <h3 className="mt-5.25 mb-5.25 text-[17px] font-medium text-[#181828]">
        Payment Method
      </h3>

      <div className="space-y-2.75">
        {/* Paypal */}
        <div>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input type="radio" name="payment" defaultChecked />
            <div>
              <p className="font-semibold text-xs text-[#181828]">Paypal</p>
            </div>
          </label>
          <p className="text-[11px] font-medium text-[#AFB0C0] mt-2">
            Pay with your paypal balance or connected bank account it's quick
            and really secure.
          </p>
        </div>

        {/* Card */}
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input type="radio" name="payment" />
          <div>
            <p className="font-semibold text-xs text-[#181828]">
              Credit or Debit card
            </p>
          </div>
        </label>
      </div>

      {/* Button */}
      <button className="orderSummary-btn mt-8.25 ">Complete order !</button>
    </div>
  );
};

export default CheckoutOrderSum;
