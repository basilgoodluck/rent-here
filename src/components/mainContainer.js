import React from 'react'


function MainContainer({newcontent}) {
  return (
    <div className='w-11/12 m-auto mt-16'>
      <div className=''>
        <div className='pb-6'>
          <div className='relative mb-16'>
            <h1 className='mainHeader text-2xl font-semibold text-black text-center w-4/6 mx-auto max-w-content' style={{ whiteSpace: 'nowrap' }}>Browse From Top Categories</h1>
          </div>
          {newcontent}
        </div>            
      </div>      
    </div>
  )
}

export default MainContainer
