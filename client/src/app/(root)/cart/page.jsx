import CartHeader from '@/components/Cart/CartHeader'
import ItemGrid from '@/components/Cart/ItemGrid'
import PromoCode from '@/components/Cart/PromoCode'
import MarketPlace from '@/components/common/MarketPlace'
import React from 'react'

const page = () => {
  return (
    <div className="mt-9 mx-auto">
      <MarketPlace />
      <CartHeader/>
      <ItemGrid/>
      <PromoCode/>
    </div>
  )
}

export default page
