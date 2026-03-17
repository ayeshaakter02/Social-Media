import PostCard from '@/components/Home/PostCard'
import PostReact from '@/components/Home/PostReact'
import SeeComments from '@/components/Home/SeeComments'
import PostVideos from '@/components/Home/PostVideos'
import React from 'react'
import PostImage from '@/components/Home/PostImage'

const HomePages = () => {
  return (
    <div>
          <PostCard />
          <PostReact/>
          <SeeComments/>
          <PostVideos/>
          <PostImage/>
        </div>
  )
}

export default HomePages