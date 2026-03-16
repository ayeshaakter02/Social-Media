import PostCard from '@/components/Home/PostCard'
import PostReact from '@/components/Home/PostReact'
import SeeComments from '@/components/Home/SeeComments'
import React from 'react'

const HomePages = () => {
  return (
    <div>
          <PostCard />
          <PostReact/>
          <SeeComments/>
        </div>
  )
}

export default HomePages