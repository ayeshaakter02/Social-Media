"use client";
import Aboutme from "@/components/common/Aboutme";
import Photos from "@/components/common/Photos";
import PostCard from "@/components/Home/PostCard";
import ProfileHeader from "@/components/common/ProfileHeader";
import Videos from "@/components/common/Videos";
import React from "react";
import PostReact from "@/components/Home/PostReact";

const page = () => {
  return (
    <div>
      <ProfileHeader />
      <div className="flex">
        <div>
          <Aboutme />
          <Photos />
          <Videos />
        </div>
        <div>
          <PostCard />
          <PostReact/>
        </div>
      </div>
    </div>
  );
};

export default page;
