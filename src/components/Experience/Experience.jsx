import React from 'react'
import './Experience.css'
function Experience() {
  return (
    <div className='experience' style={{top:'-200px'}}>
      <div className='achievement'>
        <div className='circle'>8+</div>
          <span>Years</span>
          <span>Experience</span>
        </div>     
     <div className='achievement'>
         <div className='circle'>20+</div>
         <span>completed</span>
         <span>Projects</span>
     </div>
     <div className='achievement'>
         <div className='circle' style={{top:'-5px'}}>5+</div>
         <span>companies</span>
         <span>Work</span>
    </div>      
    </div>
  )
}

export default Experience