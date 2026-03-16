import React from 'react'
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";

const Status = () => {
  return (
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
  )
}

export default Status