import MarketPlace from '@/components/common/MarketPlace'
import Pagenation from '@/components/common/Pagenation'
import ProductGrid from '@/components/Store/StoreGrid'
import StoreHeader from '@/components/Store/StoreHeader'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <StoreHeader/>
        <ProductGrid/>
        <div className="mt-10">
        <Pagenation/>
      </div>
    </div>
  )
}

export default page