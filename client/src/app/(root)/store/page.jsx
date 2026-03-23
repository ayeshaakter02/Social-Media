import MarketPlace from '@/components/common/MarketPlace'
import ProductGrid from '@/components/Store/ProductGrid'
import StoreHeader from '@/components/Store/StoreHeader'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <StoreHeader/>
        <ProductGrid/>
    </div>
  )
}

export default page