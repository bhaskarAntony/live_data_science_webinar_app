import React from 'react'
import '../styles/works.css'
import works from '../data/content.json'

function Works() {
  return (
    <section className='works mt-5' id='why'>
        <div className="container">
            <h1 className=" text-center text-white mb-5">How Our Data Science Webinar Works Over <span className="text-main">3 hours</span></h1>
            <div className="work-text-container p-3 p-lg-5">
            <h1 className="heading-subtitle text-white mb-5"> <i class="bi bi-star text-main mx-2"></i>3 HOUR Workshop</h1>
            {
                works.working.map((item)=>(
                    <p className='p-large'><i class="bi bi-check2 text-main"></i> {item.works}</p>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Works
