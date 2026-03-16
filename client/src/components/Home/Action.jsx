import React, { useState } from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
import { FaThumbsUp, FaCommentAlt } from "react-icons/fa";
import ReactionPanel from './ReactionPanel';


const Action = () => {
  const [hovered, setHovered] = useState(false);
  return (
          <div className="flex gap-39.25 text-gray-600 mt-6.5 text-sm">
            <div className="relative flex flex-col items-start">
      <button
        className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaThumbsUp /> <span>Like</span>
      </button>

      {/* Show Reaction Panel on hover */}
      {hovered && <ReactionPanel />}
    </div>
            <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
              <FaCommentAlt />
              <span>Comment</span>
            </button>
            <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
              <IoShareSocialOutline /> Share
            </button>
          </div>
  )
}

export default Action