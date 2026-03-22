"use client";

import Content from "./Content";
import Creator from "./Creator";
import Action from "./Action";
import Status from "./Status";

export default function PostCard() {
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl p-5 mt-8.25 font-poppins">
      {/* Header */}
        <Creator />
      {/* Post Text */}
      <Content />
      {/* border */}
      <div className="text-[#D9D9D9] border-b"></div>
      {/* post status */}
      <Status />
      {/* border */}
      <div className="post-border"></div>
      {/* Actions */}
      <Action />
    </div>
  );
}
