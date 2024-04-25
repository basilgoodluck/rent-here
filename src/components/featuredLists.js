import React from 'react'
import FeaturedCard from './featuredCard'

function FeaturedLists() {
  return (
    <div className=''>
      <div className=''>
          <div className='pb-6 flex justify-between'>
              <a href='https://github.com/basilgoodluck' className='bg-red-500 px-8 py-2 inline-block rounded-3xl' style={{ whiteSpace: 'nowrap' }}>All Items (5623)</a>
              <a href='https://github.com/basilgoodluck' className='bg-gray-200 px-8 py-2 inline-block rounded-3xl ml-4' style={{ whiteSpace: 'nowrap' }}>Residential Spaces (1074)</a>
              <a href='https://github.com/basilgoodluck' className='bg-gray-200 px-8 py-2 inline-block rounded-3xl ml-4' style={{ whiteSpace: 'nowrap' }}>Vehicles (523)</a>
              <a href='https://github.com/basilgoodluck' className='bg-gray-200 px-8 py-2 inline-block rounded-3xl ml-4' style={{ whiteSpace: 'nowrap' }}>Other Things (56273)</a>
          </div>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
              <FeaturedCard />
          </div>
          <div className='py-6'>
            <a href='https://github.com/basilgoodluck' className='block text-white bg-red-500 text-center w-36 py-2 px-4 rounded-3xl m-auto' style={{ whiteSpace: 'nowrap' }}>Load More</a>
          </div>
      </div>      
    </div>



  )
}

export default FeaturedLists
