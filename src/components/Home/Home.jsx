import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro'
import Services from '../Services/Services'
import Works  from  '../works/works'
import Testimonial from '../Testimonial/Testimonial'
import ContactUs  from  '../contactus/ContactUs'
import Footer from  '../Fotter/Footer'
import Experience from '../Experience/Experience'
import '../Home/Home.css'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
        <Intro/>
         <Services/>
          <Experience/>
           <Works/>
          <Testimonial/>
          <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home