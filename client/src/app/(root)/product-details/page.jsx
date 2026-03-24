import MarketPlace from '@/components/common/MarketPlace'
import ProductHeader from '@/components/ProductDetails/ProductHeader'
import ProductPreview from '@/components/ProductDetails/ProductPreview'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <ProductHeader/>
        <ProductPreview/>
    </div>
  )
}

export default page