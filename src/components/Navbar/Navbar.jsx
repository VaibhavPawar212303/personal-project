import React from 'react'
import Logo from '../images/logo.png'
import '../Navbar/Navbar.css'
function Navbar() {
  return (
    <nav className='Main-nav'>

      {/* First div to including the logo*/}
      <div className='Logo'>
        <img src={Logo} height={40} width={150}/>         
      </div>

      {/* Second div to including the logo*/}
      <div className='Nav-menu'>
        <ul>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Domains</a>
          </li>
          <li>
            <a href="">Hire QA Tester</a>
          </li>
        </ul>
      </div>

      {/* Second div to including the logo*/}
      <div className='button'>
        contact us
      </div>
    </nav>
  )
}

export default Navbar