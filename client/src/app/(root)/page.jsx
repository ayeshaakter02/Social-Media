"use client"
import PostCard from '@/components/Home/PostCard'
import ProfileHeader from '@/components/Home/ProfileHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProfileHeader/>
      <PostCard/>
    </div> 
  )
}

export default page