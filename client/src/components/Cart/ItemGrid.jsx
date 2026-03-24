import React from 'react'
import ItemCard from './ItemCard'

const ItemGrid = () => {
  return (
    <div className='font-poppins'>
       <div className="">
        {Array.from({ length: 3 }).map((r, i) => (
          <ItemCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default ItemGrid
