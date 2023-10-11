import React from 'react'
import '../styles/enroll.css'

function Enroll() {
  return (
    <section className='enroll container mt-5' id='enroll'>
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
            <div className="enroll-card">
            <h1 className="heading-subtitle text-white">Enroll Our <br /> Data Science Workshop</h1>
            <div className="d-flex align-items-end">
            <h1 className="heading-text text-main mx-2">&#8377;199</h1>
            <h1 className="heading-subtitle text-white"><del>&#8377;1000</del></h1>
           
            </div>
            <div className="enroll-points">
                <p className="p-large text-white"><i class="bi bi-check2 text-main mx-2"></i>Take advantage of the discounted price of 199</p>
                <p className="p-large text-white"><i class="bi bi-check2 text-main mx-2"></i>This Offer will Expires Soon</p>
            </div>
            <button className="main-btn w-100">Enroll</button>
        </div>
            </div>
        </div>
        <div className="text-center mt-5">
        <a href="#faq" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del>1000/-</del> 199/-</button></a>
        </div>
    </section>
  )
}

export default Enroll
