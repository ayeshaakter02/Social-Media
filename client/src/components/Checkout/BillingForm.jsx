"use client";

const BillingForm = () => {
  return (
    <div className="w-196 bg-white rounded-[15px] px-8 pt-8 pb-7.5 font-poppins">
      <h2 className="text-lg font-medium mb-8">Billing Details</h2>

      {/* Grid Form */}
      <div className="grid grid-cols-2 gap-3">
        {/* First Name */}
        <input
          type="text"
          placeholder="First name"
          className="checkoutOrderSum-input"
        />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last name"
          className="checkoutOrderSum-input"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="checkoutOrderSum-input my-2.5"
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone number"
          className="checkoutOrderSum-input my-2.5"
        />

        {/* Full Address */}
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Full address"
            className="checkoutOrderSum-input"
          />
        </div>

        {/* City */}
        <input
          type="text"
          placeholder="New York"
          className="checkoutOrderSum-input my-2.5"
        />

        {/* ZIP Code */}
        <input
          type="text"
          placeholder="ZIP Code"
          className="checkoutOrderSum-input my-2.5"
        />

        {/* Textarea */}
        <textarea
          rows="4"
          placeholder="Write any additional details here..."
          className="checkoutOrderSum-input col-span-2 pt-[14.55px]"
        ></textarea>
      </div>
    </div>
  );
};

export default BillingForm;
