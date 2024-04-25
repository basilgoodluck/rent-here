import React from 'react'

function Insights() {
  return (
    <div>
        <div className='w-11/12 m-auto bg-gray-200 py-3 px-4 mt-16 lg:flex lg:items-center lg:py-10 lg:w-full'>
            <h1 className='lg:text-left lg:w-1/5 p-2 text-center text-black text-3xl font-semibold pb-10'>Insights and Performance Metrics</h1>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:w-4/5'>
                <div className='bg-gray-800 rounded-2xl grid text-center gap-8 py-12 px-6'>
                    <h1 className='text-white text-5xl font-bold'>5000+</h1>
                    <h1 className='text-white text-sm'>Total Listings in the system</h1>
                </div>
                <div className='bg-gray-800 rounded-2xl grid text-center gap-8 py-12 px-6'>
                    <h1 className='text-white text-5xl font-bold'>840+</h1>
                    <h1 className='text-white text-sm'>Total Listings in the system</h1>
                </div>
                <div className='bg-gray-800 rounded-2xl grid text-center gap-8 py-12 px-6'>
                    <h1 className='text-white text-5xl font-bold'>72+</h1>
                    <h1 className='text-white text-sm'>Total Listings in the system</h1>
                </div>
            </div>
        </div>              
    </div>
  )
}

export default Insights
