import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className='error'>
        <div className='text-center'>
          <h1 className='text-danger' style={{fontSize:"65px"}}>ERROR 404!</h1>
          <p className='linked'>page not found please go back.</p>
          <NavLink to="/call">
            <button className='btn btn-primary linked'>
            GO TO HOME
            </button>
          </NavLink>
        </div>
      </div>
     
    </>
  )
}

export default Error