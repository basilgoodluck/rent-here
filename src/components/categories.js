import React from 'react'
import { GoThumbsup } from "react-icons/go";
import { PiHouseLine } from "react-icons/pi";
import { FiCompass } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";




function Categories() {
  return (
    <div>
        <div className='grid'>
            <div className=''>
                <GoThumbsup />
                <h4>Holiday Rentals</h4>
            </div>
            <div>
                <PiHouseLine />
                <h4>Residential Spaces</h4>
            </div>
            <div>
                <FiCompass />
                <h4>Event Spaces</h4>
            </div>
            <div>
                <FiDollarSign />
                <h4>Commercial Properties</h4>
            </div>
            <div>
                <HiOutlineDotsCircleHorizontal />
                <h4>More</h4>
            </div>
        </div>
      
    </div>
  )
}

export default Categories
