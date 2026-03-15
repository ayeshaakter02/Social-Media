"use client";

import Image from "next/image";
import {
  FaHeart,
  FaThumbsUp,
  FaRegCommentDots,
  FaShare,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdSentimentSatisfied } from "react-icons/md";
import { RiEmotionLaughLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";


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

        <HiDotsHorizontal className='font-poppins font-normal text-[30px]'/>
      </div>

      {/* Post Text */}
      <p className="text-sm text-gray-700 mt-5.75 leading-relaxed font-normal mb-7.25">
        I have great news to share with you all! I’ve been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I’ll be uploading new content every day, improving the quality and I’m gonna have access to games a month before the official release.

This is a dream come true, thanks to all for the support!!!
      </p>
      {/* border */}
            <div className="flex justify-between text-sm text-[#D9D9D9] mt-3 border-b pb-3"></div>

      {/* Reaction Icons */}
      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 text-white">
          <FaThumbsUp />
        </div>

        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-red-500 text-white">
          <FaHeart />
        </div>

        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white">
          <MdSentimentSatisfied />
        </div>

        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-yellow-400 text-white">
          <RiEmotionLaughLine />
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-sm text-gray-600 mt-3 border-b pb-3">
        <p>12</p>

        <div className="flex gap-4">
          <p>12 Participants</p>
          <p>13 Comments</p>
          <p>2 Shares</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between text-gray-600 mt-3 text-sm">

        <button className="flex items-center gap-2 hover:text-blue-500">
          <FaThumbsUp /> Like
        </button>

        <button className="flex items-center gap-2 hover:text-blue-500">
          <FaRegCommentDots /> Comment
        </button>

        <button className="flex items-center gap-2 hover:text-blue-500">
          <FaShare /> Share
        </button>

      </div>
    </div>
  );
}