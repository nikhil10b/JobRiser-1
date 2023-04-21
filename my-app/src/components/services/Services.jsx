import React from 'react'
import "./services.css"

function Services() {
  return (
    <div className='d-flex w-100 justify-content-center'>
    <div className='services'>
      <div className='services-box'>
      <img src="/images/intern.png" alt="" /> 
      <div className='services-heading'>
        <div className='services-main-heading'>
            JOBS
        </div>
        <div>
            Get jobs offer by the top companies 
        </div>
      </div>
      </div>
      <div className='services-box'>
        <div className='d-flex align-items-start flex-column w-100 h-100 text-light'>

        <div className='job-heading'>
          Job Riser 
        </div>
        <div className='job-heading-main'>
          Upskill your knowledge with Job Riser 
        </div>
        <div className='job-head'>
          We provide you the full learning experience with
          <br />
          <ul>
            <li>guaranteed jobs </li>
            <li>internship with ppo</li>
            <li>full courses </li>
          </ul>
        </div>
        <div className='job-heading'>
          ~ Features 
        </div>
        <div className='job-head'>
          <ul>
            <li>
              Unlimited access to top courses 
            </li>
            <li>
              Syllabus wise topics prepared 
            </li>
            <li>Top certifications in tech </li>
          </ul>
        </div>
        </div>
        <div>

        </div>
      </div>
      <div className='services-box'>
        <img src="/images/jobb.png" alt="" /> 
        <div className='services-heading'>
        <div className='services-main-heading'>
            INTERNSHIPS
        </div>
        <div>
            Get internships in your dream companies 
        </div>
      </div>
      
      </div>
      <div className='services-box'>
      <img src="/images/course.png" alt="" />  
      <div className='services-heading'>
        <div className='services-main-heading'>
            COURSES 
        </div>
        <div>
            Learn with our online courses 
        </div>
      </div>
      </div>
      
    
    </div>
        </div>
  )
}

export default Services
