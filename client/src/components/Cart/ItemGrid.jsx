import React from 'react'
import ItemCard from './ItemCard'

const ItemGrid = () => {
  return (
    <div className='font-poppins'>
      <div className="flex w-161.25 mt-3.25 mb-2.5">
        <p className='font-medium text-[15px]'>ITEM</p>
        <p className='font-medium text-[15px] ml-90.5 mr-33.25'>QUANTITY</p>
        <p className='font-medium text-[15px]'>ITEM</p>
      </div>
       <div className="">
        {Array.from({ length: 3 }).map((r, i) => (
          <ItemCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default ItemGrid
