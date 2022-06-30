import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../contactus/ContactUs.css'

export const ContactUs = () => {
  const form = useRef();
  const [done,setDone] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uuoppmh', 'template_8qbvkal', form.current,'-wljDVi6ryuCdJqmtsMNq')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form'>
    <div className='c-left'>
      <div className='awesome'>
      <span>Get in touch</span>
      <br/>
      <span>Contact us</span>
      <br/>
      <span>Get in touch with us today to know more and avail of our quality testing services.<br/>
            Get your application free from bugs and errors. Fill out the form mentioned below,<br/> 
            and we will reach out to you with a free price quote right away.</span>
   </div>
   </div>
    <div className='c-right'> 
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name="user_name" className="user" placeholder="Name"/>
        <input type='email' name="user_email" className="user" placeholder="Email"/>
        <textarea name='message' className="user" placeholder="Message"/>
        <input type="submit" value="Send" className='button'/>
        <span>{done && "Thanks for contactin me"}</span>
      </form>
    </div>
  </div>
  );
};

export default ContactUs