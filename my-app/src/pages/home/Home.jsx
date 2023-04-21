import React from 'react'
import "./home.css"
import TopCompanies from '../../components/topCompanies/TopCompanies'
import Carousel from '../../components/carousel/Carousel'
import Services from '../../components/services/Services'
import Footer from '../../components/footer/Footer'
import Opportunities from '../../components/opportunities/Opportunities'




function Home() {

  return (
    <div>
        <div className='hero-outer-div'>

        <img src="/images/hero.png" alt="" className='hero-img'/>
        <div className='hero-h1-div'>

        <h1 className='hero-h1-1'>
        A complete
        </h1>
        <h1 className='hero-h1-2'>
           Guide to get you placed!
        </h1>
        </div>
        </div>
        <TopCompanies/>
        <Carousel/>
        <Services/>
        <Opportunities/>
        <Footer/>
        

    </div>
  )
}

export default Home
