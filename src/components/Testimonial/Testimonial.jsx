import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Testimonial.css'
import profile1 from '../images/Logo1.png'
import profile2 from '../images/Logo1.png'
import profile3 from '../images/Logo1.png'
import profile4 from '../images/Logo1.png'
import profile5 from '../images/Logo1.png'
import {Pagination} from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'
function Testimonial() {
    const clients= [
        {
            img: profile1,
            review: "We selected Testrig as our QA partner over 16 months ago and they have been a key addition to our product team. Parimal and his team members have consistently provided the level of service and interaction what we have been searching for. They have worked seamlessly with both our development group and with product management. They are a valued addition and I would definitely recommend Testrig to any company looking for highly reliable and professi...",
        
        },
        {
            img: profile2,
            review: "We selected Testrig as our QA partner over 16 months ago and they have been a key addition to our product team. Parimal and his team members have consistently provided the level of service and interaction what we have been searching for. They have worked seamlessly with both our development group and with product management. They are a valued addition and I would definitely recommend Testrig to any company looking for highly reliable and professi...",
        
        },
        {
            img: profile3,
            review: "We selected Testrig as our QA partner over 16 months ago and they have been a key addition to our product team. Parimal and his team members have consistently provided the level of service and interaction what we have been searching for. They have worked seamlessly with both our development group and with product management. They are a valued addition and I would definitely recommend Testrig to any company looking for highly reliable and professi...",
        
        },
        {
            img: profile4,
            review: "We selected Testrig as our QA partner over 16 months ago and they have been a key addition to our product team. Parimal and his team members have consistently provided the level of service and interaction what we have been searching for. They have worked seamlessly with both our development group and with product management. They are a valued addition and I would definitely recommend Testrig to any company looking for highly reliable and professi...",
        
        },
        {
            img: profile5,
            review: "We selected Testrig as our QA partner over 16 months ago and they have been a key addition to our product team. Parimal and his team members have consistently provided the level of service and interaction what we have been searching for. They have worked seamlessly with both our development group and with product management. They are a valued addition and I would definitely recommend Testrig to any company looking for highly reliable and professi...",
        
        }   
    ]
  return (
    <div className='t-wrapper' id='Hire' style={{top:'-310px'}}>
      <div className='t-heading'>
        <span>Client always get </span>
        <span>Exceptional work</span>
        <span> From Us.....</span>
      </div>
      <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
       >
         {clients.map((client,index)=>{
             return(
                 <SwiperSlide key={index}>
                   <div className='testimonial'>
                     <img src={client.img} alt=''/>
                     <span>{client.review}</span>
                   </div>    
                 </SwiperSlide>
             )
         })}
      </Swiper>
    </div>
  )
}

export default Testimonial