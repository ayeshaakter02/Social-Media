import BillingForm from '@/components/Checkout/BillingForm'
import CheckoutHeader from '@/components/Checkout/CheckoutHeader'
import MarketPlace from '@/components/common/MarketPlace'
import React from 'react'

const page = () => {
  return (
    <div className='mt-9 mx-auto'>
        <MarketPlace/>
        <CheckoutHeader/>
        <BillingForm/>
    </div>
  )
}

export default page