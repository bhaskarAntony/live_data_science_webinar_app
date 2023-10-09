import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "What is this Data Science workshop about?",
        "ans":  "This workshop is designed to introduce you to the fundamentals of data science,including data analysis, machine learning, and practical applications"
    },
    {
        "title": "quest2",
        "quest": "Who should attend this workshop?",
        "ans":  "This workshop is suitable for anyone interested in entering the field of data science,regardless of their background or prior experience."
    },
    {
        "title": "quest3",
        "quest": "Do I need to have prior data science knowledge?",
        "ans":  "No, prior data science knowledge is not required. This workshop is designed for beginners and covers the basics."
    },
    {
        "title": "quest4",
        "quest": "Will workshop materials be provided?",
        "ans":  "Yes, workshop materials and resources will be provided to participants."
    },
    {
        "title": "quest5",
        "quest": "Is this a paid workshop?",
        "ans":  "Yes, the workshop costs just ₹199."
    },
    {
        "title": "quest6",
        "quest": "What should I do if I encounter technical issues during the workshop?",
        "ans":  "In case of technical difficulties, our support team will be available to assist you. Contact information will be provided during the workshop."
    }
]
}

function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-white mb-5">
                    Frequently Asked <span className="text-main">Questions</span>
                </h1>
            </div>
          </div>

          <div className="row mt-3 mb-3">
           <div className="col-12 col-md-12 col-lg-8">
           <div className="accordion accordion-flush" id='faq'>
                    {
                        allFaqs.faq.map((item,index) => {
                          return (
                            <div className="accordion-item bg-transparent mt-2 mb-2" key={index}>
                              <div className="accordion-header ">
                                <div className="accordion-button collapsed  border bg-main mb-1" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-black"> { item.quest } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse bg-white" data-bs-parent="#faq">
                                  <div className="accordion body p-4">
                                  
                                      <p className="text-black text-justify"> { item.ans } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            <Registration/>
           </div>
          </div>
        </div>
    </section>
  )
}

export default FAQ
