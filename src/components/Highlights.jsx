import React from 'react'
import '../styles/highlights.css'

const highlights = [
    {
        image:"https://cdn-icons-png.flaticon.com/128/10789/10789560.png",
        title:"Actionable Knowledge",
        content:"Acquire valuable, hands-on insights to launch your data science career effectively"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/7257/7257539.png",
        title:"Q&A Sessions",
        content:"Get your burning questions answered by industry experts in real time"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/9464/9464456.png",
        title:"Industry Demand",
        content:"Learn from experts about the current job market's robust demand for careers in Data Science"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/11060/11060995.png",
        title:"Flexible Learning",
        content:"Attend our workshop conveniently from your own home"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/3660/3660781.png",
        title:"Engage and Connect",
        content:"Interact with seasoned industry professionals and fellow enthusiasts for an interactive learning experience"
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/3387/3387740.png",
        title:"E-Certificate and study Material",
        content:"We offer E-certificates upon completion of the workshop and provide study materials"
    },
]

function Highlights() {
  return (
    <section className='highlights text-center mt-5' id='highlight'>
        <h1 className="heading text-white mb-5">Data Science Workshop <span className='text-main'>Highlights</span></h1>
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
        <a href="#register" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del>1000/-</del> 199/-</button></a>
        </div>
    </section>
  )
}

export default Highlights
