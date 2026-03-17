import PostCard from '@/components/Home/PostCard'
import PostReact from '@/components/Home/PostReact'
import SeeComments from '@/components/Home/SeeComments'
import Videos from '@/components/Home/Videos'
import React from 'react'

const HomePages = () => {
  return (
    <div>
          <PostCard />
          <PostReact/>
          <SeeComments/>
          <Videos/>
        </div>
  )
}

export default HomePages