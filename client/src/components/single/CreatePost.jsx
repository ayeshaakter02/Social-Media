"use client";

import { useState } from "react";
import { FaLayerGroup, FaCamera } from "react-icons/fa";
import { TbMenu4 } from "react-icons/tb";
import { MdImage } from "react-icons/md";
import { BsImages } from "react-icons/bs";

const CreatePost = () => {
  const [activeTab, setActiveTab] = useState("status");
  const [text, setText] = useState("");

  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-[15px] ml-3.75 mt-8.25 font-poppins">
      
      {/* Tabs */}
      <div className="flex">
        <div
          onClick={() => setActiveTab("status")}
          className={`flex justify-center items-center gap-4 px-27 py-7.25 font-inter font-bold text-xs flex-1 cursor-pointer ${
            activeTab === "status"
              ? "rounded-tl-[15px] bg-[#615DFA] text-white"
              : "text-[#DEDEDE]"
          }`}
        >
          <TbMenu4 className="text-[20px]"/>
          Status
        </div>

        <div
          onClick={() => setActiveTab("product")}
          className={`flex justify-center items-center gap-4 px-20.75 whitespace-nowrap py-7.25 font-inter font-bold text-xs flex-1 cursor-pointer ${
            activeTab === "product"
              ? "rounded-tr-[15px]  bg-[#615DFA] text-white"
              : "text-[#DEDEDE]"
          }`}
        >
          <FaLayerGroup className="text-[20px]"/>
          Product Upload
        </div>
      </div>

      {/* Input */}
      <div className="px-6 py-6 border-t border-gray-300">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Hi, Ayesha Akter, Share your post ..."
          className="w-full h-37.5 bg-transparent font-light text-xs font-inter text-[#AFB0C0] pt-6.25 pl-6.5 "
        />
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between py-4.25 border-t border-gray-300 px-7">
        
        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-500 text-xl">
          <FaCamera className="cursor-pointer hover:text-black" />
          <BsImages className="cursor-pointer hover:text-black" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setText("")}
            className="font-inter font-bold text-xs px-9.25 py-2 rounded-lg bg-[#1E1E2F] hover:bg-[#615DFA] text-white hover:opacity-90"
          >
            Discard
          </button>

          <button
          onClick={() => setText("")}
            className="font-inter font-bold text-xs px-9.25 py-2 rounded-lg bg-[#1E1E2F] hover:bg-[#615DFA] text-white hover:opacity-90"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;