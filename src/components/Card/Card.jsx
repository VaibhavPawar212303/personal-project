import React from 'react'
import './Card.css'
function card({emoji, heading, detail}) {
  return (
    <div className='Card'>
      <img src={emoji} alt='' width={100}  style={{marginLeft:'30px'}}/>
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='cardbtn'>Learn More</button>
    </div>
  )
}

export default card;