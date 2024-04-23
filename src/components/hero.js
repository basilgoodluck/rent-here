import React from 'react'
import { CiSearch } from "react-icons/ci";


function Hero() {
  return (
    <div className='h-screen  bg-heroBg bg-cover bg-center'>
        <div className='h-full w-full flex items-center justify-center flex-col text-center'>
            <div>
                <h1 className='font-bold text-4xl'>Discover Your <br className='md:hidden' /> <span className='text-red-600'>Perfect Rental </span></h1>
                <p className='text-white'>Rent Cars, Houses, and Items in just a Few Clicks</p>
            </div>
            <div className='flex flex-col w-full'>
                <div className='w-2/3 flex justify-between m-auto py-2'>
                    <a className='bg-red-500 py-1 px-7 rounded-3xl'>Places</a>
                    <a className='bg-gray-100 py-1 px-7 rounded-3xl'>Rides</a>
                    <a className='bg-gray-100 py-1 px-7 rounded-3xl'>Things</a>
                </div>
                <div className='w-2/3 m-auto py-4'>
                    <form className='grid gap-4'>
                        <div>
                            <CiSearch />
                            <input 
                                type='text'
                                placeholder= 'Search for houses, cars and more'
                                className='block w-full rounded-3xl py-2 px-4'/>
                        </div>
                        <select className='block w-full rounded-3xl py-2 px-4'>
                            <option>Select a location</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                        </select>
                        <button className='w-full bg-red-500 rounded-3xl py-2 px-4'> Search Now</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
