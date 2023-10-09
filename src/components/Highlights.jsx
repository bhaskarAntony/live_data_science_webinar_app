import React from 'react'
import '../styles/highlights.css'

const highlights = [
    {
        image:"",
        title:"Actionable Knowledge",
        content:"Acquire valuable, hands-on insights to launch your data science career effectively"
    },
    {
        image:"",
        title:"Q&A Sessions",
        content:"Get your burning questions answered by industry experts in real time"
    },
    {
        image:"",
        title:"Industry Demand",
        content:"Learn from experts about the current job market's robust demand for careers in Data Science"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/11060/11060995.png",
        title:"Flexible Learning",
        content:"Attend our workshop conveniently from your own home"
    },
    {
        image:"",
        title:"Engage and Connect",
        content:"Interact with seasoned industry professionals and fellow enthusiasts for an interactive learning experience"
    },
    {
        image:"",
        title:"E-Certificate and study Material",
        content:"We offer E-certificates upon completion of the webinar and provide study materials"
    },
]

function Highlights() {
  return (
    <section className='highlights text-center mt-5'>
        <h1 className="heading text-white mb-5">Data Science Webinar <span className='text-main'>Highlights</span></h1>
        <div className="container mt-3">
            <div className="row">
            {
                highlights.map((item)=>(
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="highlight-card">
                            <div className="h-card-header text-center">
                                <img src={item.image} alt="" className="" />
                            </div>
                            <div className="h-card-body">
                                <h1 className="p-large-xl text-700"> <i class="bi bi-stars  mx-2"></i>{item.title}</h1>
                                <p className="p-large">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
        <div className="text-center mt-5">
            <button className="main-btn px-5 text-700">Register Now <del>1000/-</del> 199/-</button>
        </div>
    </section>
  )
}

export default Highlights
