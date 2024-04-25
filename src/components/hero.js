import React from 'react'
import { CiSearch } from "react-icons/ci";


function Hero() {
  return (
    <div className='h-screen  bg-heroBg bg-cover bg-center'>
        <div className='h-full w-full flex items-center justify-center flex-col text-center'>
            <div>
                <h1 className='font-bold text-4xl text-black'>Discover Your <br className='md:hidden' /> <span className='text-red-600'>Perfect Rental </span></h1>
                <p className='text-black text-md'>Rent Cars, Houses, and Items in just a Few Clicks</p>
            </div>
            <div className='flex flex-col w-full'>
                <div className='w-2/3 flex justify-between m-auto py-2 md:justify-center md:grid md:gap-4 md:grid-cols-3 md:w-1/3'>
                    <a className='bg-red-500 py-1 px-7 rounded-3xl' href='https://google.com'>Places</a>
                    <a className='bg-gray-100 py-1 px-7 rounded-3xl' href='https://google.com'>Rides</a>
                    <a className='bg-gray-100 py-1 px-7 rounded-3xl' href='https://google.com'>Things</a>
                </div>
                <div className='w-2/3 m-auto py-4'>
                    <form className='lg:w-2/5 grid gap-4 md:grid-cols-3 md:gap-0 md:bg-white md:justify-center md:items-center md:rounded-3xl'>
                        <div>
                            {/* <CiSearch /> */}
                            <input 
                                type='text'
                                placeholder= 'Search for houses, cars and more'
                                className='block w-full rounded-3xl py-2 px-4'/>
                        </div>
                        <select className='block w-full rounded-3xl py-2 px-4 md:border-l md:border-gray-300 md:rounded-none'>
                            <option>Select a location</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                        </select>
                        <button className='w-full md:w-0 bg-red-500 rounded-3xl py-2 px-4'><CiSearch /></button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
