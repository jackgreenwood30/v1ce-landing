import React from 'react'
import Image from 'next/image'

const TrustedBrands = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='md:flex md:gap-20 md:grid-container grid grid-cols-2 gap-12'>
        <Image src="/assets/icons/trustedBrands/google.png" width={115} height={40} alt='Google Logo'/>
        <Image src="/assets/icons/trustedBrands/google.png" width={115} height={40} alt='Google Logo'/>
        <Image src="/assets/icons/trustedBrands/google.png" width={115} height={40} alt='Google Logo'/>
        <Image src="/assets/icons/trustedBrands/google.png" width={115} height={40} alt='Google Logo'/>
        <Image src="/assets/icons/trustedBrands/google.png" width={115} height={40} alt='Google Logo'/>
        <Image src="/assets/icons/trustedBrands/google.png" width={115} height={40} alt='Google Logo'/>
      </div>
    </div>
  )
}

export default TrustedBrands