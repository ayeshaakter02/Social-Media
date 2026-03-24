import React from 'react'
import Creator from '../Home/Creator'
import Content from '../Home/Content'
import Participants from '../Home/Participants'
import Action from '../Home/Action'

const PostPhotos = () => {
  return (
    <div className="max-w-146.25 mx-auto bg-white rounded-2xl mt-8.25 font-poppins  py-5">
      <div className="px-5">
        <div>
          {/* Header */}
          <Creator />
          {/* Post Text */}
          <Content />
        </div>
        <div className="grid grid-cols-2 gap-3.25 mb-16.25">
          <div className="bg-[#7A77FD] w-66.5 h-51.75 rounded-[15px]"></div>
          <div className="bg-[#7A77FD] w-66.5 h-51.75 rounded-[15px]"></div>
          <div className="bg-[#7A77FD] w-66.5 h-51.75 rounded-[15px]"></div>
          <div className="bg-[#41EFFF] w-66.5 h-51.75 rounded-[15px] font-inter font-bold text-[36px] text-white flex justify-center items-center" >10+</div>
        </div>
        <div>
          {/* border */}
          <div className="text-[#D9D9D9] border-b"></div>
          {/* post status */}
          <Participants />
          {/* border  */}
          <div className="post-border"></div>
          {/* Actions */}
          <Action />
        </div>
      </div>

    </div>
  )
}

export default PostPhotos