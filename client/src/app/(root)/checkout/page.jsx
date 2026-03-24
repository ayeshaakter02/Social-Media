import BillingForm from '@/components/Checkout/BillingForm'
import CheckoutHeader from '@/components/Checkout/CheckoutHeader'
import CheckoutOrderSum from '@/components/Checkout/CheckoutOrderSum'
import MarketPlace from '@/components/common/MarketPlace'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <CheckoutHeader/>
        <div className="flex gap-3.75 items-start">
          <BillingForm/>
        <CheckoutOrderSum/>
        </div>
        
    </div>
  )
}

export default page