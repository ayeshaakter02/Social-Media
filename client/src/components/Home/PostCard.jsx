"use client";

import Image from "next/image";
import {
  FaHeart,
  FaThumbsUp,
  FaCommentAlt
} from "react-icons/fa";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";


export default function PostCard() {
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl shadow p-5 ml-3.75 mt-8.25 font-poppins">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12.5 h-12.5 border-3 border-[#D9D9D9] rounded-full bg-[#615DFA]"></div>

          <div className="ml-3.75">
            <h3 className="font-bold text-sm ">
              A B M Shawon Islam
            </h3>
            <p className="text-xs text-[#AFB0C0] font-medium">
              29 minutes ago
            </p>
          </div>
        </div>

        <HiDotsHorizontal className='font-poppins font-normal text-[30px]' />
      </div>

      {/* Post Text */}
      <p className="text-sm text-gray-700 mt-5.75 leading-relaxed font-normal mb-7.25">
        I have great news to share with you all! I’ve been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I’ll be uploading new content every day, improving the quality and I’m gonna have access to games a month before the official release.

        This is a dream come true, thanks to all for the support!!!
      </p>
      {/* border */}
      <div className="flex justify-between text-sm text-[#D9D9D9] border-b"></div>

      {/* post status */}
      <div className="flex gap-39.25 items-center mt-4 ">
        <div className="flex gap-3.25 items-center ml-3">
        <div className="flex items-center">
          <div className="flex items-center absolute justify-center w-5 h-5 rounded-full bg-red-500 text-white">
            <FaHeart className="w-2.5" />
          </div>

          <div className="-ml-3 z-10 flex items-center justify-center w-5 h-5 rounded-full bg-[#30e6f3]  text-white">

            <FaThumbsUp className="w-2.5 " />
          </div>

          <div className="ml-1 text-yellow-400 w-5 h-5 rounded-full bg-black">
            <BsFillEmojiSurpriseFill className="w-5 h-5" />
          </div>

        </div>
        <p className="font-inter font-bold text-xs">12</p>
      </div>
          <p className="font-inter font-bold text-xs">13 Comments</p>
          <p className="font-inter font-bold text-xs">2 Shares</p>
      </div>

      {/* border */}
            <div className="flex justify-between text-sm text-[#D9D9D9] mt-3.75 border-b -ml-5 w-146.25"></div>

      {/* Actions */}
      <div className="flex gap-39.25 text-gray-600 mt-6.5 text-sm">

        <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
          <FaThumbsUp /> <span>Like</span>
        </button>

        <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
          <FaCommentAlt /><span>Comment</span>
        </button>

        <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
          <IoShareSocialOutline /> Share
        </button>

      </div>
    </div>
  );
}