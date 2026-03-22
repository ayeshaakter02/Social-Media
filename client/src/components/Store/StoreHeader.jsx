import Link from 'next/link'
import React from 'react'

const StoreHeader = () => {
  return (
    <div className='font-poppins mt-5.5'>
        <h3 className='font-bold text-sm mb-5.75'>Categories</h3>
        <div className="flex w-296 pl-3.5 pt-3.5 pb-3.75 gap-3.75 bg-white rounded-[7px] text-sm font-poppins font-medium">
            <Link href={"/desktop"} className='cursor-pointer'>Desktop</Link>
            <Link href={"/laptop"} className='cursor-pointer'>Laptop</Link>
            <Link href={"/component"} className='cursor-pointer'>Component</Link>
            <Link href={"/monitor"} className='cursor-pointer'>Monitor</Link>
            <Link href={"/usp"} className='cursor-pointer'>UPS</Link>
            <Link href={"/tablet"} className='cursor-pointer'>Tablet</Link>
            <Link href={"/office-equipment"} className='cursor-pointer'>Office Equipment</Link>
            <Link href={"/camera"} className='cursor-pointer'>Camera </Link>
            <Link href={"/security"} className='cursor-pointer'>Security</Link>
            <Link href={"/networking"} className='cursor-pointer'>Networking</Link>
            <Link href={"/software"} className='cursor-pointer'>Software</Link>
            <Link href={"/accessories"} className='cursor-pointer'>Accessories</Link>
            <Link href={"/gadget"} className='cursor-pointer'>Gadget</Link>
            <Link href={"/aming"} className='cursor-pointer'>Gaming</Link>
        </div>
    </div>
  )
}

export default StoreHeader