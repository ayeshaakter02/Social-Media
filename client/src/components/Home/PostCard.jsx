"use client";

import Content from "./Content";
import Creator from "./Creator";
import { HiDotsHorizontal } from "react-icons/hi";
import Action from "./Action";
import Status from "./Status";

export default function PostCard() {
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl shadow p-5 ml-3.75 mt-8.25 font-poppins">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Creator />
        <HiDotsHorizontal className="font-poppins font-normal text-[30px]" />
      </div>
      {/* Post Text */}
      <Content />
      {/* border */}
      <div className="flex justify-between text-sm text-[#D9D9D9] border-b"></div>
      {/* post status */}
      <Status />
      {/* border */}
      <div className="post-border"></div>
      {/* Actions */}
      <Action />
    </div>
  );
}
