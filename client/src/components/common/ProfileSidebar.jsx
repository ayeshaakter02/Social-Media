"use client";

import Link from "next/link";
import { FaNewspaper, FaGopuram, FaLayerGroup, FaAlgolia, FaUserFriends, FaAmericanSignLanguageInterpreting,   FaSignOutAlt } from "react-icons/fa";

export default function ProfileSidebar() {
  return (
    <div className="w-75 min-h-screen bg-white">

      {/* Cover */}
      <div className="bg-[#45437F] h-18.75 relative">

        {/* Avatar */}
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2">
          <div className="w-20 h-20 rounded-full border-5 border-white bg-[#615DFA]"></div>
        </div>

      </div>

      {/* Profile Info */}
      <div className="text-center mt-15 px-4 font-poppins">
        <h2 className="font-bold text-base">Ayesha Akter</h2>
        <p className="text-xs text-[#AFB0C0] font-medium">www.abm.com</p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-6 mt-10.5 text-center font-poppins">
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

      {/* Menu */}
      <div className="mt-16 px-3">

        <ul className="space-y-2 text-sm">

          <Link href="/newsfeed" className="profile-menu">
            <FaNewspaper />
            <span  className="ml-7.25">Newsfeed</span>
          </Link>

          {/* Active Menu */}
          <Link href="/vidoes" className="profile-menu">
            <FaGopuram />
            <span className="ml-7.25">Videos</span>
          </Link>

          <Link href="/group" className="profile-menu">
            <FaLayerGroup />
            <span className="ml-7.25">Groups</span>
          </Link>

          <Link href="/photos" className="profile-menu">
            <FaAlgolia />
            <span className="ml-7.25">Photos</span>
          </Link>

          <Link href="/friends" className="profile-menu">
            <FaUserFriends />
            <span className="ml-7.25">Friends</span>
          </Link>

          <Link href="/friends-request" className="profile-menu">
            <FaAmericanSignLanguageInterpreting />
            <span className="ml-7.25">Friends Request</span>
          </Link>

          <Link href="/logout" className="profile-menu">
            <FaSignOutAlt />
            <span className="ml-7.25">Logout</span>
          </Link>

        </ul>

      </div>

    </div>
  );
}