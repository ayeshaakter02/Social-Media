import React from "react";
import Creator from "./Creator";
import { HiDotsHorizontal } from "react-icons/hi";
import Participants from "./Participants";
import Action from "./Action";
import Content from "./Content";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";

const SeeComments = () => {

  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl p-5 ml-3.75 mt-8.25 font-poppins">
      <div>
        {/* Header */}
        <Creator/>
        {/* Post Text */}
        <Content />
        {/* border */}
        <div className="flex justify-between text-sm text-[#D9D9D9] border-b"></div>
        {/* post status */}
        <Participants />
        {/* border */}
        <div className="post-border"></div>
        {/* Actions */}
        <Action />
      </div>
      <div className="post-border"></div>
      {/* Comments part */}
      <div>
        {/* Comments */}
        <div>
          <div className="ml-1.5 mt-2.75 flex gap-3">
            <div className="w-9.5 h-9.5 rounded-full border-2 border-[#D9D9D9] bg-[#615DFA]"></div>
            <p className="w-119 font-poppins text-xs font-normal text-[#3E3F5E]">
              <span className="font-bold mr-2">Sohel rana</span> It’s a always
              pleasure to do this streams with you. If we have at least half
              half the fun than last time it will be an incredible success!
            </p>
          </div>

          {/* Comment react */}
          <div className="flex items-center pl-17 font-poppins text-xs font-medium mt-3.75">
            <div className="flex items-center">
              <div className="flex items-center absolute justify-center w-5 h-5 rounded-full text-yellow-400 bg-black">
                <BsFillEmojiSurpriseFill className="w-5 h-5" />
              </div>
              <div className="-ml-3 z-10 flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-b from-[#97edf3] to-[#01bac7]  text-white">
                <FaThumbsUp className="w-2.5 " />
              </div>
            </div>
            <p className="ml-4.75">4</p>
            <p className="ml-3.5 text-[#AFB0C0]">React!</p>
            <p className="ml-5.25 text-[#AFB0C0]">Reply</p>
            <p className="ml-6 text-[#AFB0C0]">15 minutes ago</p>
            <HiDotsHorizontal className="text-[30px] cursor-pointer ml-6.5" />
          </div>
        </div>
        {/* Comments reply */}
        <div className="ml-6">
          <div className="mt-4 flex gap-3">
            <div className="w-9.5 h-9.5 rounded-full border-2 border-[#D9D9D9] bg-[#615DFA]"></div>
            <p className="w-119 font-poppins text-xs font-normal text-[#3E3F5E]">
              <span className="font-bold mr-2">Noyon</span> It’s great
              oppurtunity
            </p>
          </div>

          {/* Comment react */}
          <div className="flex items-center pl-14.5 -mt-4 font-poppins text-xs font-medium">
            <div className="flex items-center">
              <div className="-ml-3 z-10 flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-b from-[#97edf3] to-[#01bac7]  text-white">
                <FaThumbsUp className="w-2.5 " />
              </div>
            </div>
            <p className="ml-3">1</p>
            <p className="ml-3.5 text-[#AFB0C0]">React!</p>
            <p className="ml-5.25 text-[#AFB0C0]">Reply</p>
            <p className="ml-6 text-[#AFB0C0]">15 minutes ago</p>
            <HiDotsHorizontal className="text-[30px] cursor-pointer ml-6.5" />
          </div>
        </div>
      </div>
      {/* load more comments */}
      <div>
        <div className="post-border"></div>
        <p className="mt-4 items-center justify-center flex font-poppins font-normal text-xs text-[#3E3F5E]">Load more comments <span className="font-medium text-[#01C7D9] ml-1">9+</span></p>
        <div className="post-border"></div>
      </div>
      {/* Reply inputs */}
      <div className="flex ml-1.25 pt-4.5 -pb-0.5">
        <div className="w-9.5 h-9.5 rounded-full border-2 border-[#D9D9D9] bg-[#615DFA]"></div>
        <input className="w-119 border rounded-[13px] p-3.75 font-poppins font-semibold text-xs text-[#D9D9D9] ml-4.75" placeholder="Your reply" type="text" />
      </div>
    </div>
  );
};

export default SeeComments;
