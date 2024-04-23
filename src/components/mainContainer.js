import React from 'react'
import Categories from './categories.js'

function MainContainer() {
  return (
    <div className='w-11/12 m-auto'>
      <div className=''>
        <h1 className='text-black text-center'>Browse From Top Categories</h1>
        <Categories />
        
      </div>      
    </div>
  )
}

export default MainContainer
