"use client"
import Aboutme from '@/components/common/Aboutme'
import Photos from '@/components/common/Photos'
import ProfileHeader from '@/components/common/ProfileHeader'
import Videos from '@/components/common/Videos'
import CreatePost from '@/components/Newsfeed/CreatePost'
import HomePages from '@/Pages/HomePages'
import React from 'react'

const page = () => {
  return (
    <div className='mb-154.25'>
      <ProfileHeader />
      <div className="flex">
        <div>
          <Aboutme />
          <Photos />
          <Videos />
        </div>
        <div className='ml-3.75 '>
          <CreatePost/>
          <HomePages/>
        </div>
      </div>
    </div>
  )
}

export default page