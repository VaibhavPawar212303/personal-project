import React from 'react'
import './Intro.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from '../images/image1.png';
import Image2 from '../images/image2.png';
import Image3 from '../images/image3.png';
import Image4 from '../images/image4.png';
import { Carousel } from 'react-responsive-carousel';

function intro() {

  return (
    <div className='Intro'>
      <div className='Intro-left'>
        <div className='Intro-name'>
           <span>Welcome to the <br/> TESTRIG</span><span>SOFTWARE TESTING <br/> COMPANY</span>
           <span>Testrig Provides End To End Software Testing Services For<br/> All Your Web,Mobile And
            Automation Testing Needs.</span>
         </div>
         <div className='hirebtn'>
           <button className='button Introbtn'>Contact Us</button>
        </div>
     </div>
       <div className='Intro-right'>
         <div className='slide-div'>
         <Carousel infiniteLoop autoPlay>
            <div>
              <img src={Image1} />
            </div>
            <div>
              <img src={Image2} />
            </div>
            <div>
              <img src={Image3} />
            </div>
            <div>
              <img src={Image4} />
            </div>
         </Carousel>
         </div>
       </div> 
    </div>
  )
}

export default intro