import React from 'react'

function FeaturedCard() {
  return (
    <div>
        <div className='relative rounded-t-3xl overflow-hidden'>
            <p className='text-white absolute top-3 right-5 bg-green-400 py-1 px-3 rounded-3xl'>For Rent</p>
            <div>
                <img src='./images/heroBg.png' alt='featuredImage' className='w-full'/>
            </div>
            <div className='border border-gray-200 tracking-wider rounded-b-3xl'>
                <h1 className='text-red-600 font-semibold text-md p-2'>85,000 NGN <span className='text-black text-sm'>/month</span></h1>
                <h1 className='p-2 font-semibold text-2xl'>Luxury Villa in Lekki County Homes</h1>
                <div className='px-2 pb-4'>
                    <p>4 Bedrooms</p>
                    <p>4 Bathrooma</p>
                    <p>4,000sq</p>
                </div>
                <div className='border-t border-gray-200 py-4 px-2'>
                    <div className='flex items-center'>
                        <img src='./images/heroBg.png' alt='Heosd' className='w-12 h-12 rounded-full'/>
                        <div className='pl-4 '>
                            <h4 className='font-bold text-xl'> Basil Goodluck</h4>
                            <p className='text-gray-500'>Property Seller</p>

                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default FeaturedCard
