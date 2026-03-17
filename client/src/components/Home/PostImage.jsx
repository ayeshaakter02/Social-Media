import React, { useState } from "react";
import Creator from "./Creator";
import { HiDotsHorizontal } from "react-icons/hi";
import Participants from "./Participants";
import Action from "./Action";
import Content from "./Content";

const PostImage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl shadow ml-3.75 mt-8.25 font-poppins  py-5">
      <div className=" pl-5">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between">
            <Creator />
          </div>
          {/* Post Text */}
          <Content />
        </div>
      </div>
      {/* Upload a video  */}
      <div className="bg-[#7A77FD] w-146 h-86.25 mb-3.75"></div>
      <div className="pl-5">
        {/* border */}
        <div className="flex justify-between text-sm text-[#D9D9D9] border-b"></div>
        {/* post status */}
        <Participants />
        {/* border  */}
        <div className="post-border"></div>
        {/* Actions */}
        <Action />
      </div>
    </div>
  );
};

export default PostImage;
