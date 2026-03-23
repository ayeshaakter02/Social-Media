import MarketPlace from '@/components/common/MarketPlace'
import ProductHeader from '@/components/Product/ProductHeader'
import ProductSidebarFilter from '@/components/Product/ProductSidebarFilter'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <ProductHeader/>
        <ProductSidebarFilter/>
    </div>
  )
}

export default page