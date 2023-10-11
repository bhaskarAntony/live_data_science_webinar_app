import React from 'react'
import '../styles/Homehero.css'
import Registration from './Registration'
import OfferEnds from './OfferEnds'

function HomeHero() {
  return (
    <section className='hero text-center p-lg-4 p-2' id='home'>
      <a href="#register" className='text-decoration-none'>
          <div className="pay-highlight text-center">
            <p className="p-large"> Early Bird Offer : Price resets to  <del className='mx-2'>1000/- </del> <span className="text-main">Rs 199/-</span> when the timer below hits 0. <i class="bi bi-arrow-right mx-4"></i></p>
           
        </div>
          </a>
          <p className='p-2 text-black bg-white rounded-5 mb-3 mt-3'>Data science Workshop</p>
        <h1 className="heading-text  text-white mt-3 text-900 py-2">Secrets Blueprint for  High-Paid <span className="text-main">Data Science <br />Career</span></h1>
        <div className="p-large text-white">Live Q&A Session With Experts, <br />Get Data Science Career Industry Demands,  Get E-Certificate and Study Meterial</div>
        <div className="date-container mt-5">
            <button className="div-block-876"> <i class="bi bi-calendar2-event"></i> 28th Oct 2023 </button>
            <button className="div-block-876"> <i class="bi bi-alarm"></i> 10:30 AM</button>
        </div>
        <div className='container-fluid mt-5'>
        <div className="row">
        <div className="col-1 col-md-3 col-lg-4 p-0 m-0">
            <div className="bars">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                
            </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4 p-0 m-0">
            <Registration/>
        </div>
        <div className="col-1 col-md-3 col-lg-4 p-0 mt-0">
            <div className="bars">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>

            </div>
        </div>
      </div>
        </div>
       <div className="text-center container-fluid">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-12 col-md-8">
        <OfferEnds/>
            
            </div>
        </div>
       </div>
    </section>
  )
}

export default HomeHero
