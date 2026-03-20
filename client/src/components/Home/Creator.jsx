import React, { useState } from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const Creator = () => {
    const [open, setOpen] = useState(false);
  return (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
                  <div className="w-12.5 h-12.5 border-3 border-[#D9D9D9] rounded-full bg-[#615DFA]"></div>
                  <div className="ml-3.75">
                    <h3 className="font-bold text-sm ">Ayesha Akter</h3>
                    <p className="text-xs text-[#AFB0C0] font-medium">29 minutes ago</p>
                  </div>
                </div>
          <div className="relative inline-block">
            {/* Button */}
            <HiDotsHorizontal
              onClick={() => setOpen(!open)}
              className="text-[30px] cursor-pointer"
            />

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 font-poppins text-xs font-normal rounded-xl bg-white shadow-[0px_1px_4px_1px_rgba(0,0,0,0.16)]">
                <ul className="py-4 pl-4">
                  <li className="hover:bg-gray-100 cursor-pointer">
                    Edit Post
                  </li>
                  <li className="hover:bg-gray-100 cursor-pointer my-1.5">
                    Delete Post
                  </li>
                  <li className="hover:bg-gray-100 cursor-pointer mb-1.5">
                    Report Post
                  </li>
                  <li className="hover:bg-gray-100 cursor-pointer">
                    Report Author
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
  )
}

export default Creator