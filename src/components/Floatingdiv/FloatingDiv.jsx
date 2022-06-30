import React from 'react'
import './FloatingDiv.css'
function FloatingDiv( {txt1, txt2} ) {
  return (
    <div className='Floatingdiv'>
      <span>{txt1} {txt2}</span>
    </div>
  )
}

export default FloatingDiv