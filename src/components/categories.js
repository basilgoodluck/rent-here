import React from 'react'
import { GoThumbsup } from "react-icons/go";
import { PiHouseLine } from "react-icons/pi";
import { FiCompass } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";




function Categories() {
  return (
    <div>
        <div className='grid w-full gap-4'>
            <div className='flex items-center border border-solid p-1 rounded-full border-gray-300'>
                <GoThumbsup className='text-red-600 font-black text-5xl p-2 bg-red-100 rounded-full'/>
                <h4 className='px-3 text-lg font-semibold text-gray-700'>Holiday Rentals</h4>
            </div>
            <div className='flex items-center border border-solid p-1 rounded-full border-gray-300'>
                <PiHouseLine className='text-green-600 font-black text-5xl p-2 bg-green-100 rounded-full' />
                <h4 className='px-3 text-lg font-semibold text-gray-700'>Residential Spaces</h4>
            </div>
            <div className='flex items-center border border-solid p-1 rounded-full border-gray-300'>
                <FiCompass className='text-purple-600 font-black text-5xl p-2 bg-purple-100 rounded-full' />
                <h4 className='px-3 text-lg font-semibold text-gray-700'>Event Spaces</h4>
            </div>
            <div className='flex items-center border border-solid p-1 rounded-full border-gray-300'>
                <FiDollarSign className='text-blue-600 font-black text-5xl p-2 bg-blue-100 rounded-full' />
                <h4 className='px-3 text-lg font-semibold text-gray-700'>Commercial Properties</h4>
            </div>
            <div className='flex items-center border border-solid p-1 rounded-full border-gray-300'>
                <HiOutlineDotsCircleHorizontal className='text-orange-600 font-black text-5xl p-2 bg-orange-100 rounded-full' />
                <h4 className='px-3 text-lg font-semibold text-gray-700'>More</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Categories
