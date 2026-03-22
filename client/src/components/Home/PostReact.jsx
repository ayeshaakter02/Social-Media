import React from "react";

import Participants from "./Participants";
import Creator from "./Creator";
import Content from "./Content";
import Action from "./Action";

const PostReact = () => {
  return (
    <div className="mt-4.25 relative">
          <div className="max-w-146.25 mx-auto bg-white rounded-2xl p-5 mt-8.25 font-poppins">
      {/* Header */}
        <Creator />
      {/* Post Text */}
      <Content />
      {/* border */}
      <div className="text-[#D9D9D9] border-b"></div>
      {/* post status */}
      <Participants/>
      {/* border */}
      <div className="post-border"></div>
      {/* Actions */}
      <Action />
    </div>
    </div>
  );
};

export default PostReact;
