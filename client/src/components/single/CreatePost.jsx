"use client";

import { useState } from "react";
import { FaLayerGroup, FaCamera } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { TbMenu4 } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

import { IoIosArrowDown } from "react-icons/io";

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
          <TbMenu4 className="text-[20px]" />
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
          <FaLayerGroup className="text-[20px]" />
          Product Upload
        </div>
      </div>

      {/* ================= STATUS UI ================= */}
      {activeTab === "status" && (
        <>
          <div className="px-6 py-6 border-t border-[#D9D9D9]">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Hi, Ayesha Akter, Share your post ..."
              className="w-full h-37.5 bg-transparent font-light text-xs font-inter text-[#AFB0C0] pt-6.25 pl-6.5 "
            />
          </div>

          <div className="flex items-center justify-between pt-4.25 pb-4.75 border-t border-[#D9D9D9] px-7">
            {/* Icons */}
            <div className="flex items-center gap-5 text-[#3E3F5E] text-xl">
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
        </>
      )}

      {/* ================= PRODUCT UI ================= */}
      {activeTab === "product" && (
        <div className="pl-5.25 pr-5.5 pt-7.25 space-y-2.5 border-t border-[#D9D9D9]">
          {/* Inputs */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex relative items-center">
              <input placeholder="Product name" className="input" />
              <IoIosArrowDown className="absolute right-2.5 w-2.5 h-2.5 text-[#D9D9D9]" />
            </div>
            <input placeholder="$12" className="input" />

            <div className="flex relative items-center">
              <input placeholder="Product Category" className="input" />
              <IoIosArrowDown className="absolute right-2.5 w-2.5 h-2.5 text-[#D9D9D9]" />
            </div>

            <div className="flex relative items-center">
              <input placeholder="Product Color" className="input" />
              <IoIosArrowDown className="absolute right-2.5 w-2.5 h-2.5 text-[#D9D9D9]" />
            </div>
            <div className="flex relative items-center">
              <input placeholder="Product Size" className="input" />
              <IoIosArrowDown className="absolute right-2.5 w-2.5 h-2.5 text-[#D9D9D9]" />
            </div>
            <input placeholder="10" className="input" />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button className="input bg-[#24234B] text-white ">
              Image Preview
            </button>
            <button className="input bg-[#1877F2] text-white">
              Image Thumbnail
            </button>
          </div>

          {/* Preview Boxes */}
          <div className="grid grid-cols-2 gap-2.75 mt-1.25">
            <div className="h-32.75 bg-[#615DFA]"></div>
            <div className="h-32.75 bg-[#24234B]"></div>
          </div>

          {/* Description */}
          <textarea
            placeholder="Product Description"
            className="input w-135.25 h-17.75 pt-2.5"
          />

          {/* Additional Info */}
          <div>
            <p className="mb-2.5 font-medium font-inter text-xs">Additional Information</p>

            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-1">
                <div className="grid grid-cols-2 gap-2.5 mb-2">
                  <input
                  placeholder="Feature Name"
                  className="input w-[256px]"
                />
                <input
                  placeholder="Feature Value"
                  className="input w-[256px]"
                />
                </div>
                <button className="bg-[#EA5050] text-white rounded-[3px] w-4 h-7.5 flex justify-center items-center"><RiDeleteBin6Line className="w-2.5 h-2.5"/></button>
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center justify-between py-4.75 border-t border-[#D9D9D9]">

            {/* Buttons */}
            <div className="flex items-center gap-4 ml-74.25">
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
      )}
    </div>
  );
};

export default CreatePost;
