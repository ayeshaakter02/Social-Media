import React, { useState } from "react";
import Creator from "./Creator";
import { HiDotsHorizontal } from "react-icons/hi";
import Participants from "./Participants";
import Action from "./Action";
import Content from "./Content";
import { FaThumbsUp } from "react-icons/fa";
import { BsFillEmojiSurpriseFill } from "react-icons/bs";

const PostVideos = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl shadow ml-3.75 mt-8.25 font-poppins">
      <div className=" pl-5 pt-5">
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
      <div className="bg-[#7A77FD] py-31.25 px-60.5 mb-3.75">
        <img className="w-25 h-25" src="./images/play.png" alt="" />
      </div>
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

export default PostVideos;
