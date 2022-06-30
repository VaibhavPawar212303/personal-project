import React from 'react'
import footer from '../images/footer.png'
import Linkedin from '../images/linkedin.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Github from '../images/github.png'
import Discord from '../images/discord.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <img src={footer} alt="" style={{width:'100%'}}/>
      <div className='f-content'>
        <span>+1(347)464-1241</span>
        <span>info@testrigtechnologies.com</span>
        <div className='f-icone'>
          <img src={Instagram} alt="" style={{width:"40px"}}/>
          <img src={Linkedin} alt="" style={{width:"40px"}}/>
          <img src={Github} alt="" style={{width:"40px"}}/>
          <img src={Facebook} alt="" style={{width:"40px"}}/>
          <img src={Discord} alt="" style={{width:"40px"}}/>
        </div>
      </div>
    </div>
  )
}

export default Footer