"use client"
import PersonalInfo from '@/components/About/PersonalInfo'
import Aboutme from '@/components/common/Aboutme'
import ProfileHeader from '@/components/common/ProfileHeader'
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
          <PersonalInfo/>
        </div>
        
      </div>
    </div>
  )
}

export default page