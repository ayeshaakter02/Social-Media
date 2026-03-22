import React from "react";
import Creator from "./Creator";
import Participants from "./Participants";
import Action from "./Action";
import Content from "./Content";

const PostImage = () => {
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl mt-8.25 font-poppins  py-5">
      <div className="px-5">
        <div>
          {/* Header */}
            <Creator />
          {/* Post Text */}
          <Content />
        </div>
      </div>
      {/* Upload a video  */}
      <div className="bg-[#7A77FD] w-146 h-86.25 mb-3.75"></div>
      <div className="px-5">
        {/* border */}
        <div className="text-[#D9D9D9] border-b"></div>
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
