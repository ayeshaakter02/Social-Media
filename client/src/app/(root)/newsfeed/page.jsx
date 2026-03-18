"use client"
import Aboutme from '@/components/common/Aboutme'
import Photos from '@/components/common/Photos'
import ProfileHeader from '@/components/common/ProfileHeader'
import Videos from '@/components/common/Videos'
import HomePages from '@/Pages/HomePages'
import React from 'react'

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
          <HomePages/>
        </div>
      </div>
    </div>
  )
}

export default page