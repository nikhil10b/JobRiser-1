import React from 'react'
import "./topCompanies.css"


function TopCompanies() {
  return (
    <div className='top-company'>
        <div className='company-heading'>
            TOP COMPANIES 
        </div>
      <div class="slider">
        <div class="slide-track">
          <div className="slide-company">
            <img
              src="/images/google.png"
              alt=""
            />
          </div>
          
          
          <div className="slide-company">
            <img
              src="/images/mahindra.png"

              alt=""
            />
          </div>

          <div className="slide-company">
            <img
              src="/images/cisco.jpg
"
              alt=""
            />
          </div>
          <div className="slide-company">
            <img
              src="/images/microsoft.png
"
              alt=""
            />
          </div>
          <div className="slide-company">
            <img
              src="/images/oracle.png
"
              alt=""
            />
          </div>
          <div className="slide-company">
            <img
              src="/images/wipro.png
"
              alt=""
            />
          </div>
          <div className="slide-company">
            <img
              src="/images/adobe.png
"
              alt=""
            />
          </div>
          <div className="slide-company">
            <img
              src="/images/tata.png"
              alt=""
            />
          </div>
        </div>
        </div>
    </div>
  )
}

export default TopCompanies
