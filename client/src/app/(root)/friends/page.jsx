"use client";
import Aboutme from "@/components/common/Aboutme";
import Photos from "@/components/common/Photos";
import ProfileHeader from "@/components/common/ProfileHeader";
import Videos from "@/components/common/Videos";
import CreatePost from "@/components/Newsfeed/CreatePost";
import ProfileGrid from "@/components/Friends/ProfileGrid";
import HomePages from "@/Pages/HomePages";
import React from "react";
import FriendsHeader from "@/components/Friends/FriendsHeader";

const page = () => {
  return (
    <div className="mb-154.25">
      <ProfileHeader />
      <FriendsHeader />
      <ProfileGrid />
    </div>
  );
};

export default page;
