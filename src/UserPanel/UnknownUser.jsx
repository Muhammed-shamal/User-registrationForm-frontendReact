import React from 'react'
import {Link} from 'react-router-dom'

export default function UnknownUser() {
  return (
    <div className='container mt-4'>
      <h1>Hello, welcome new User</h1>
        <h4 className='mt-1'>you need to signIn first to go forward with your Data!</h4>
        <h6 className='mt-1'>can you please?</h6>

        <div className="col-lg-4 mt-3">
          <div className="d-flex justify-content-between">
            <Link to="/signIn"><button type="button" className='btn btn-primary'>SignIn</button></Link>
            <Link to="/login"><button type="button" className='btn btn-success'>LogIn</button></Link>
          </div>
        </div>
    </div>
  )
}
