import React, { useEffect, useState } from 'react'
import '../styles/registration.css'
// import * as EmailValidator from 'node-email-validation'
import axios from 'axios';
import Email from '../template/email';
import UserEmail from '../template/confirmation';
import InfluenceEmail from '../template/influence';
import { toast } from 'react-toastify';

const URL = "https://email-api-r1kd.onrender.com"


const LoadingModal = () => {
    return (
      <div className="loading-modal">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  };

function Registration() {
    const [influencers, setInfluencers] = useState([]);
    useEffect(() => {
      // Fetch influencer data from the API endpoint
      axios.get('https://teal-fluffy-hen.cyclic.app/api/influencers/list')
        .then((response) => {
          setInfluencers(response.data);
          console.log("influencers", response.data);
        })
        .catch((error) => {
          console.error('Error fetching influencers:', error);
        });
    }, []);
    const [reg, setReg] = useState({
        name: "",
        email: "",
        mobile: "",
        coupon: "",
      });
    
      const [err, setError] = useState(false);
      const [nameErr, setNameErr] = useState("");
      const [emailErr, setEmailErr] = useState("");
      const [mobileErr, setMobileErr] = useState("");
      const [loading, setLoading] = useState(false);
    
      const readValue = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
          validateName(value);
        }
        if (name === "email") {
          validateEmail(value);
        }
        if (name === "mobile") {
          validateMobile(value);
        }
        setReg({ ...reg, [name]: value });
      };
    
      const validateName = (name) => {
        if (name === "") {
          setError(true);
          setNameErr("Name field cannot be empty");
        } else {
          let regex = /^[a-zA-Z\s]+$/;
          if (regex.test(name) === false) {
            setError(true);
            setNameErr("Please enter a valid name");
          } else {
            setError(false);
            setNameErr(false);
          }
        }
      };
    
      const validateMobile = (mobile) => {
        if (mobile === "") {
          setError(true);
          setMobileErr("Mobile field cannot be empty");
        } else {
          let regex = /^[6-9]\d{9}$/;
          if (regex.test(mobile) === false) {
            setError(true);
            setMobileErr("Invalid Mobile number");
          } else {
            setMobileErr("");
            setError(false);
          }
        }
      };
    
      const validateEmail = (email) => {
        if (email === "") {
          setError(true);
          setEmailErr("Email field cannot be empty");
        } else {
          let regex = /^\S+@\S+\.\S+$/;
          if (regex.test(email) === false) {
            setError(true);
            setEmailErr("Invalid Email format");
        //   } else if (EmailValidator.is_email_valid(email) === false) {
        //     setError(true);
        //     setEmailErr("Invalid Email service");
        //   } else {
            setError(false);
            setEmailErr("");
          }
        }
      };
    
      const sendEmail = async (name, email, mobile, coupon, influencer ) => {
        try {
          let data = Email(name, email, mobile, coupon, influencer);
          let to = "Chandini.cv@be-practical.com";
          let sub = "Webinar Registration details";
    
          let final = {
            to,
            subject: sub,
            content: data,
          };
    
          setLoading(true);
    
          await axios
            .post(`${URL}/api/send/mail`, final)
            .then((res) => {
              setLoading(false);
              toast.info("To Complete registration. Pay Rs.199 to secure your spot on the webinar.");
              window.location.href = 'https://pages.razorpay.com/be-practial-webinar';
            })
            .catch((err) => toast.error(err.message));
        } catch (err) {
          console.log(err.message);
        }
      };
    
      const checkCouponCode = (couponCode) => {
        const influencer = influencers.find((i) => i.couponCode === couponCode);
        return influencer ? influencer.email : null;
      };
    
      const submitHandler = async (e) => {
          e.preventDefault();
          // Perform final validation here
          if (influencers.length === 0) {
            console.error('Influencers data is not available. Please handle this case.');
            return;
          }
          try {
              axios.post('https://teal-fluffy-hen.cyclic.app/api/users/register', reg)
              .then(response => {
                // Handle the response data here
                toast.success("user created successfully")
                console.log(response);
              })
              .catch(error => {
                // Handle any errors here
                toast.error(error)
                console.error(error);
              });
          } catch (error) {
            // Handle any network errors or server-side errors here
            console.error('Error:', error);
            toast.error('An error occurred while creating the influencer. Please try again.');
          }
      
          if (err) {
              toast.error("Check your Details..");
          } else {
              // Check if the entered coupon code matches an influencer's coupon code
              const influencer = influencers.find((i) => i.couponCode === reg.coupon);
              console.log("Coupon Code:", reg.coupon);
              console.log("Influencer Object:", influencer);
  
              if (influencer) {
                  sendEmail(reg.name, reg.email, reg.mobile, reg.coupon, influencer.email);
              } else {
                  sendEmail(reg.name, reg.email, reg.mobile, reg.coupon, null);
              }
      
              // Send an email to the user
              try {
                  let userData = UserEmail(reg.name);
                  let userTo = reg.email; // User's email address
                  let userSub = "Webinar Registration Confirmation";
      
                  let userMail = {
                      to: userTo,
                      subject: userSub,
                      content: userData,
                  };
      
                  setLoading(true);
      
                  await axios
                      .post(`${URL}/api/send/mail`, userMail)
                      .then((res) => {
                          setLoading(false);
                      })
                      .catch((err) => {
                          setLoading(false);
                          console.error("Error sending user email:", err.message);
                      });
              } catch (err) {
                  console.error("Error sending user email:", err.message);
              }
      
              if (influencer) {
                  // If a match is found, send an email to the influencer's email address
                  try {
                      let influencerData = InfluenceEmail(reg.name, reg.email, reg.mobile, reg.coupon, influencer.email);
                      let influencerTo = influencer.email; // Influencer's email address
                      let influencerSub = "User Registered with Your Coupon Code";
      
                      let influencerMail = {
                          to: influencerTo,
                          subject: influencerSub,
                          content: influencerData,
                      };
      
                      setLoading(true);
      
                      await axios
                          .post(`${URL}/api/send/mail`, influencerMail)
                          .then((res) => {
                              setLoading(false);
                              // You can add a toast or message here for the influencer
                          })
                          .catch((err) => {
                              setLoading(false);
                              console.error("Error sending influencer email:", err.message);
                              toast.error("Failed to send influencer email. Please try again.");
                          });
                  } catch (err) {
                      console.error("Error sending influencer email:", err.message);
                  }
              }
          }
      };
  return (
    <section className='registration p-1 px-lg-3' id='register'>
           {
        loading ? <LoadingModal/> : null
}
       <div className="registration-form-container text-center">
                <div className="card register-form">
                    <div className="card-header text-start">
                    <h1 className="p-large-xl text-white">Enroll Our <br /> Data Science Workshop</h1>
            <div className="d-flex align-items-end">
            <h1 className="heading-text text-main mx-2">&#8377;199</h1>
            <h1 className="heading-subtitle text-white"><del>&#8377;1000</del></h1>
           
            </div>
                    </div>
                    <div className="card-body bg-white">
                        <form action='post' autoComplete='false' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='name' placeholder='Enter Name' value={reg.name} onChange={readValue} required />
                                <div>
                    { err && nameErr ? <strong className="text-danger"> { nameErr } </strong> : null }
                             </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control p-3" name='email' placeholder='Enter Email'  value={reg.email} onChange={readValue} required/>
                                <div>
                                    { err && emailErr ? <strong className="text-danger"> { emailErr } </strong> : null }
                              </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3"  name='mobile' placeholder='Enter Mobile Number' value={reg.mobile} onChange={readValue} required/>
                                <div>
                    { err && mobileErr ? <strong className="text-danger"> { mobileErr } </strong> : null }
                                 </div>
                            </div>
                            <div className="form-group mt-2">
                                <input type="text" className="form-control p-3" name='coupon' placeholder='Coupon Code (optional)'  value={reg.coupon} onChange={readValue} />
                            </div>
                            <div className="form-group mt-5">
                               <button type="submit" className='main-btn text-700 w-100 '>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Registration
