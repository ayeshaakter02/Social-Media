"use client";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function BillingForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-gray-200 rounded-2xl p-6 shadow-sm">
        
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Billing Details
        </h2>

        {/* Grid Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* First Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="First name"
              className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Last name"
              className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Full Address */}
          <div className="relative md:col-span-2">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full address"
              className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* City */}
          <input
            type="text"
            placeholder="New York"
            className="w-full px-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* ZIP Code */}
          <input
            type="text"
            placeholder="ZIP Code"
            className="w-full px-3 py-2 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Textarea */}
          <textarea
            rows="4"
            placeholder="Write any additional details here..."
            className="md:col-span-2 w-full px-3 py-3 rounded-2xl border border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
          ></textarea>

        </div>
      </div>
    </div>
  );
}