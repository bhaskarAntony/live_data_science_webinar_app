import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="https://res.cloudinary.com/dfogisedz/image/upload/v1696400519/webinar/wuxjubwtp8csymfqv28t.png" alt="" /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto ">
          <li className="nav-item">
            <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Enroll</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">why this?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">Highlights</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="#">FAQ's</a>
          </li>
          <li className="nav-item dropdown">
            <a className=" mx-2 main-btn px-3 py-2 text-decoration-none" href="#">
              Register Now <del>&#8377;1000</del> &#8377;199
            </a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </header>
  )
}

export default Header
