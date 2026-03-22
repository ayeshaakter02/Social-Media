"use client";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function ProfileHeader() {
  return (
    <div className="w-296.25 mx-auto pt-8">
      <div className="rounded-[10px] overflow-hidden">
        {/* Cover */}
        <div className="bg-[#45437F] h-75 relative">
          {/* Avatar */}
          <div className="absolute left-1/2 -bottom-16 -translate-x-1/2">
            <div className="w-38 h-38 rounded-full border-8 border-white bg-[#615DFA]"></div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 absolute -right-40 -bottom-5 -translate-x-1/2">
            <button className="profile-header-btn">Add Friend</button>

            <button className="profile-header-btn">Send Message</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white flex items-center justify-between pl-16.25 pt-16.25 pr-28.5 pb-5.5">
          {/* Stats */}
          <div className="flex justify-center gap-6 text-center font-poppins">
            <div>
              <p className="font-bold text-sm">930</p>
              <p className="text-[#AFB0C0] font-medium text-xs">Friends</p>
            </div>
            <div className="flex gap-6">
              <div className="border-l h-6.25 border-gray-300"></div>
              <div>
                <p className="font-bold text-sm">87</p>
                <p className="text-[#AFB0C0] font-medium text-xs">Posts</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="border-l h-6.25 border-gray-300"></div>
              <div>
                <p className="font-bold text-sm">1k</p>
                <p className="text-[#AFB0C0] font-medium text-xs">Followers</p>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="text-center ml-12 font-poppins">
            <h2 className="font-bold text-base">Ayesha Akter</h2>
            <p className="text-xs text-[#AFB0C0] font-medium">www.ayesha.com</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mr-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <FaFacebook />
            </div>

            <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
