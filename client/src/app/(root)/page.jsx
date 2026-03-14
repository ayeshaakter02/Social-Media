"use client"
import Aboutme from '@/components/common/Aboutme'
import Photos from '@/components/common/Photos'
import PostCard from '@/components/common/PostCard'
import ProfileHeader from '@/components/common/ProfileHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProfileHeader/>
      {/* <PostCard/> */}
      <Aboutme/>
      <Photos/>
    </div> 
  )
}

export default page