"use client"
import InfoCard from '@/components/About/InfoCard'
import PersonalInfo from '@/components/About/PersonalInfo'
import ProfileInfo from '@/components/About/ProfileInfo'
import Aboutme from '@/components/common/Aboutme'
import ProfileHeader from '@/components/common/ProfileHeader'

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
        <div>
          <ProfileInfo/>
        </div>
      </div>
    </div>
  )
}

export default page