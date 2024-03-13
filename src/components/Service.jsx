import React from 'react'
import Card2 from './Card2'

function Service() {

  return (
    <>
      <div className="bg-cover">
        <div className="text-center text-light" >
          <h1 className='pt-5'>Service</h1>
          <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Service</p>
        </div>
      </div>

      <div className="container mt-5">
        <Card2/>
      </div>
    </>
  )
}

export default Service