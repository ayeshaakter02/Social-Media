"use client"
import Aboutme from '@/components/common/Aboutme'
import Photos from '@/components/common/Photos'
import ProfileHeader from '@/components/common/ProfileHeader'
import Videos from '@/components/common/Videos'
import CreatePost from '@/components/single/CreatePost'
import ProfileGrid from '@/components/single/ProfileGrid'
import HomePages from '@/Pages/HomePages'
import React from 'react'

const page = () => {
  return (
    <div className='mb-154.25'>
      <ProfileHeader />
      <ProfileGrid/>
    </div>
  )
}

export default page