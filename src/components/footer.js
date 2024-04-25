import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer () {
  return (
    <div className='bg-gray-100'>
        <div className='w-11/12 m-auto text-gray-700 mt-16 py-10'>
            <div className='grid gap-8 md:grid-cols-4'>
                <div className='grid gap-4'>
                    <div className='w-16'>
                        <img src='./images/logo.svg' alt='logoddsb' className='w-full' />
                    </div>
                    <p className=''>Rental App is a marketplace where you can find variety of items that are up for rent, we are committed to giving you the best.</p>
                    <div className='flex '>
                        <FaLinkedinIn className='bg-red-600 text-white text-4xl p-1 rounded-full '/>
                        <FaYoutube className='ml-4 bg-red-600 text-white text-4xl p-1 rounded-full '/>
                        <BsTwitterX className='ml-4 bg-red-600 text-white text-4xl p-1 rounded-full '/>
                        <FaFacebookF className='ml-4 bg-red-600 text-white text-4xl p-1 rounded-full '/>
                        <AiFillInstagram className='ml-4 bg-red-600 text-white text-4xl p-1 rounded-full '/>                    
                    </div>
                </div>
                <div className='grid gap-4 font-normal'>
                    <h4 className='text-red-600 font-semibold text-xl'>Navigation</h4>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='grid gap-4 font-normal'>
                    <h4 className='text-red-600 font-semibold text-xl'>Featured Locations</h4>
                    <p>Imo</p>
                    <p>Imo</p>
                    <p>Imo</p>
                    <p>Imo</p>
                </div>
                <div className='grid gap-4 font-normal'>
                    <h4 className='text-red-600 font-semibold text-xl'>Help</h4>
                    <p>FAQ</p>
                    <p>Contact Us</p>
                </div>
                <div className='grid gap-2'>

                </div>
            </div>
            <div className='grid gap-4 md:w-1/2'>
                <h1 className='text-red-600 font-semibold text-xl'>Subscribe to Our Newsletter</h1>
                <p>Stay updated with the latest listings and rental tips</p>
                <form className='grid gap-6'>
                    <div>
                        <input 
                            type='text'
                            placeholder= 'Email Address'
                            className='block w-full rounded-3xl py-2 px-4 bg-gray-100 border border-gray-400'/>
                    </div>
                    <button className='w-full bg-red-500 rounded-3xl py-2 px-4'>Subscribe</button>
                </form>
            </div>
        </div> 
        <div className='bg-white p-6 text-center text-gray-700'>
            <p>Copyright 2024 Developed by Basil Goodluck</p>
        </div>     
    </div>
  )
}

export default Footer
