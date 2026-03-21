import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import ReactionPanel from "./ReactionPanel";
import { FaCommentAlt, FaThumbsUp } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const Action = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const timeoutRef = useRef(null);

  // Hover start
  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShow(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShow(false);
    }, 200);
  };

  return (
    <div className="flex gap-39.25 text-gray-600 mt-6 text-sm">
      
      <div
        className="relative flex flex-col items-start"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* Like Button */}
        <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs w-5 h-5">
          <span className="">
            {selected ? selected.emoji : <FaThumbsUp />}
          </span>
          <span className={selected ? "text-blue-500" : ""}>
            {selected ? selected.label : "Like"}
          </span>
        </button>

        {/* Reaction Panel */}
        <AnimatePresence>
          {show && (
            <div className="absolute bottom-full mb-5.5 z-9999">
              <ReactionPanel
                onSelect={(r) => {
                  setSelected(r);
                  setShow(false);
                }}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
      <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
              <FaCommentAlt />
              <span>Comment</span>
            </button>
            <button className="flex items-center gap-4 hover:text-blue-500 text-[#D9D9D9] font-inter font-bold text-xs">
              <IoShareSocialOutline /> Share
            </button>
    </div>
  );
};

export default Action;