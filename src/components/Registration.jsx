import React from 'react'
import '../styles/registration.css'

function Registration() {
  return (
    <div className='registration p-1 px-lg-3'>
       <div className="registration-form-container text-center">
                <div className="card register-form">
                    <div className="card-header text-start">
                    <h1 className="p-large-xl text-white">Enroll Our <br /> Data Science Webinar</h1>
            <div className="d-flex align-items-end">
            <h1 className="heading-text text-main mx-2">&#8377;199</h1>
            <h1 className="heading-subtitle text-white"><del>&#8377;1000</del></h1>
           
            </div>
                    </div>
                    <div className="card-body bg-white">
                        <form>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='name' placeholder='Enter Name'/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control p-3" name='email' placeholder='Enter Email' />
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3"  name='mobile' placeholder='Enter Mobile Number'/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='coupon' placeholder='Coupon Code (optional)' />
                            </div>
                            <div className="form-group mt-5">
                               <button type="submit" className='main-btn text-700 w-100 '>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Registration
