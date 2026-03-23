import MarketPlace from '@/components/common/MarketPlace'
import Pagenation from '@/components/Store/Pagenation'
import ProductGrid from '@/components/Store/ProductGrid'
import StoreHeader from '@/components/Store/StoreHeader'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <StoreHeader/>
        <ProductGrid/>
        <Pagenation/>
    </div>
  )
}

export default page