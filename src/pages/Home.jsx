import React from 'react'
import '../styles/home.css'
import HomeHero from '../components/HomeHero'
import Works from '../components/Works'
import About from '../components/About'
import Highlights from '../components/Highlights'
import FAQ from '../components/FAQ'
import Enroll from '../components/Enroll'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='home'>
      <HomeHero/>
      <Enroll/>
      <Works/>
      <About/>
      <div className="container-fluid bg-main mt-5 offer-end-section p-3 d-flex justify-content-center">
          <a href="" className='text-decoration-none'>
          <div className="pay-highlight text-center bg-black">
            <p className="p-large"> Early Bird Offer : Price resets to  <del className='mx-2'>1000/- </del> <span className="text-main">Rs 199/-</span> when the timer below hits 0. <i class="bi bi-arrow-right mx-4"></i></p>
           
        </div>
          </a>
      </div>
      <Highlights/>
      <Enroll/>
      <FAQ/>

    </div>
  )
}

export default Home
