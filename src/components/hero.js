import React from 'react'

function Hero() {
  return (
    <div>
        <div className='h-screen bg-heroBg bg-cover bg-center'>
            <div>
                <h1>Discover Your <span>Perfect Rental </span></h1>
                <p>Rent Cars, Houses, and Items in just a Few Clicks</p>
            </div>
            <div>
                <div>
                    <a>Places</a>
                    <a>Rides</a>
                    <a>Things</a>
                </div>
                <div>
                    <form>
                        <input placeholder='Search for houses, cars and more' />
                        <select>
                            <option>Select a location</option>
                            <option>Nigeria</option>
                            <option>Ghana</option>
                        </select>
                        <button> Search Now</button>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
