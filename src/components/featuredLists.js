import React from 'react'
import FeaturedCard from './featuredCard'

function FeaturedLists() {
  return (
    <div className=''>
      <div className=''>
        <div className='pb-6'>
            <div className='grid grid-cols-4 gap-4 border border-blue-900'>
                <a className='bg-red-500 px-8 py-2 inline-block rounded-3xl'>All Items (5623)</a>
                <a className='bg-gray-200 px-8 py-2 inline-block rounded-3xl'>Residential Spaces (1074)</a>
                <a className='bg-gray-200 px-8 py-2 inline-block rounded-3xl'>Vehicles (523)</a>
                <a className='bg-gray-200 px-8 py-2 inline-block rounded-3xl'>Other Things (56273)</a>
            </div>
        </div>
        <div>
            <FeaturedCard />
        </div>
        
      </div>      
    </div>
  )
}

export default FeaturedLists
