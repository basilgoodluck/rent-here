import React from 'react'
import { IoMdMenu } from "react-icons/io";



function Header() {
  return (
    <div>
        <div className='bg-white shadow-sm fixed w-full px-6 m-auto flex justify-between items-center'>
            <div className='w-16'>
                <img src="./images/logo.svg" alt='logo svg' className='w-full'/>
            </div>
            <div className='flex'>
                <IoMdMenu className='text-3xl' />
                <div className='text-white px-3 rounded-3xl' style={{backgroundColor: '#E93740'}}>
                    <p className='text-base'> <span className=' font-black text-xl'>+</span> Post Listing</p>
                </div>
            </div>
                        
        </div>
      
    </div>
  )
}

export default Header
