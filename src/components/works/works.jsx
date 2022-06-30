import React from 'react'
import './work.css'
import Logo1 from "../images/Logo1.png"
import Logo2 from "../images/Logo2.png"
import Logo3 from "../images/Logo2.png"
import Logo4 from "../images/Logo2.png"
import Logo5 from "../images/Logo2.png"
import { motion } from 'framer-motion'
function work() {
  
  return (
    <div className='works' id='Domains'>
       {/*left side*/}
       <div className='font'>
        <span>Works for All these</span>
        <span>Brands & clients</span>
        <span>kjsahasdfasdfkfaslkffjlasdjkflskdfj
           <br/>
            sdfasdfasdfasdfasdfasdfjksldfjasoidfja
           <br/>
           asdfasfkmfosdkfoasdkfoaskdofkasodfkaosdk
           <br/>
           sdfasdfasdfaslkdfjalskdjfalsdkjfaskldjfa
        </span>
       <button className='button downbrou'>Hire Tester</button> 
     </div>
     <div className='w-right'>
       <motion.div 
         initial={{rotate:45}}
         whileInView={{rotate:0}}
         viewport={{margin:"-40px"}}
         const transition = {{duration:3.5,type:'spring'}}
         className='w-maincircle'>
         <div className='w-seccircle'>
          <img src={Logo1} alt=''/>
         </div>
         <div className='w-seccircle'>
          <img src={Logo2} alt=''/>
         </div> 
         <div className='w-seccircle'>
          <img src={Logo3} alt=''/>
         </div>
         <div className='w-seccircle'>
          <img src={Logo4} alt=''/>
         </div>
         <div className='w-seccircle'>
          <img src={Logo5} alt=''/>
         </div>
       </motion.div>
    </div>
    </div>
  )
}

export default work