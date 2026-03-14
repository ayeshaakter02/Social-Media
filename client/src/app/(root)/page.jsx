"use client"
import Aboutme from '@/components/Home/Aboutme'
import PostCard from '@/components/Home/PostCard'
import ProfileHeader from '@/components/Home/ProfileHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProfileHeader/>
      {/* <PostCard/> */}
      <Aboutme/>
    </div> 
  )
}

export default page