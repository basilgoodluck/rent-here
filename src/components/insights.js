import React from 'react'

function Insights() {
  return (
    <div>
        <div className='w-11/12 m-auto bg-gray-200 py-3 px-4 mt-16'>
            <h1 className='p-2 text-center text-black text-3xl font-semibold pb-10'>Insights and Performance Metrics</h1>
            <div className='grid gap-6'>
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
