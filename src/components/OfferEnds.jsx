import React, { useEffect } from 'react'
import '../styles/Offer.css'

function OfferEnds() {
    const counter  = () => {
        // Set the date we're counting down to
  let countDownDate = new Date("Oct 27, 2023 12:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

useEffect(() => {
counter()
}, [])
  return (
    <div className='text-center mt-5'>
        <p className=" heading-text text-main">Offer Ends In</p>
        <div className="offer-end-card  py-1">
        <div id="demo" className="offer mt-4 text-black">
                                       <div className="row">
                                        <div className="col-3">
                                             <div className="offer-card">
                                            <p className="days heading-subtitle text-900 "></p>
                                            <sup className='p-large'>Days</sup>
                                        </div>
                                        </div>
                                        <div className="col-3">
                                        <div className="offer-card">
                                            <p className="hours heading-subtitle text-900"></p>
                                            <sup className='p-large'>hrs</sup>
                                        </div>
                                        </div>
                                        <div className="col-3">
                                        <div className="offer-card">
                                            <p className="minutes heading-subtitle text-900"></p>
                                            <sup className='p-large'>mins</sup>
                                        </div>
                                            </div>
                                            <div className="col-3">
                                            <div className="offer-card ">
                                            <p className="seconds heading-subtitle text-900"></p>
                                            <sup className='p-large'>secs</sup>
                                        </div>
                                                </div>
                                       </div>
                                    </div>
        </div>
    </div>
  )
}

export default OfferEnds
