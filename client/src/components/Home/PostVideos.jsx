import React from "react";
import Creator from "./Creator";
import Participants from "./Participants";
import Action from "./Action";
import Content from "./Content";

const PostVideos = () => {
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl ml-3.75 mt-8.25 font-poppins  py-5">
      <div className=" pl-5">
        <div>
          {/* Header */}
            <Creator />
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
