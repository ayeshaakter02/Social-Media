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

export default function PostCard() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-500"></div>

          <div>
            <h3 className="font-semibold text-sm">
              A B M Shawon Islam
            </h3>
            <p className="text-xs text-gray-500">
              29 minutes ago
            </p>
          </div>
        </div>

        <BsThreeDots className="text-gray-500 text-xl cursor-pointer" />
      </div>

      {/* Post Text */}
      <p className="text-sm text-gray-700 mt-3 leading-relaxed">
        I have great news to share with you all! I've been officially made a
        game streaming verified partner by Streamy. I'll be uploading new
        content every day, improving the quality and I'm gonna have access
        to games a month before release.
      </p>

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