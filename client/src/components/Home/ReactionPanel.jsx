import React from 'react'
import { AiFillDislike } from "react-icons/ai";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import {
  BsFillEmojiAngryFill,
  BsFillEmojiDizzyFill,
  BsFillEmojiTearFill,
} from "react-icons/bs";

const ReactionPanel = () => {
  return (
          <div className="absolute bottom-22">
        <div className="flex w-102 rounded-[30px] gap-2 bg-white shadow-[0px_1px_4px_1px_rgba(0,0,0,0.16)] justify-center items-center py-3">
          <div className="-ml-3 z-10 flex items-center text-xl justify-center w-10 h-10 rounded-full bg-linear-to-b from-[#97edf3] to-[#01bac7]  text-white">
            <FaThumbsUp />
          </div>
          <div className="">
            <div className="font-poppins text-xs font-normal py-0.75 px-2.75 bg-[#45437F] rounded-[22px] absolute -top-[20%] -ml-1.25 text-white">Love</div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-b from-[#fc6666] to-[#df0000] text-white text-xl">
            <FaHeart />
          </div>
          </div>
          
          <div className="flex items-center text-xl justify-center w-10 h-10 rounded-full bg-linear-to-b from-[#d166fc] to-[#c600d8]  text-white">
            <AiFillDislike />
          </div>
          <div className=" text-yellow-400 w-10 h-10 text-[50px] rounded-full bg-black">
            <MdEmojiEmotions className="justify-center -ml-1.25 -mt-1" />
          </div>
          <div className=" text-yellow-400 text-[40px] rounded-full bg-black">
            <BsFillEmojiDizzyFill />
          </div>
          <div className=" text-[#f37814] text-[40px] rounded-full bg-black">
            <BsFillEmojiAngryFill />
          </div>
          <div className=" text-blue-500 text-[40px] rounded-full bg-black">
            <BsFillEmojiTearFill />
          </div>
        </div>
      </div>
  )
}

export default ReactionPanel