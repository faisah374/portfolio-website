import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import "../app/styles/contact.css"
const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact-grid'>
            <div className='contact-space'>
                <h2 className='heading-text' data-aos="zoom-in-up">Get in touch</h2>
                <p  className='contact-text' data-aos="zoom-in-up">
                    Drop me line, give me a call, or send me massage by the form.
                </p>
                <div className='contact-flex'aos-data="zoom-in-up" ><AiOutlineMail size={30}/> 
              
                faisalh374@gmail.com</div>
            
                
                <div className='contact-flex ' aos-data="zoom-in-up" >< BsTelephoneFill size={30} />
                (0305)2062510</div>
            
             </div>

             <div className='contact space'>
                <div className='form' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"className='input-text'id='name' />
                </div>
     
                 <div className='cotact-space'>
                  <div className='from'data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='input-field' id='name' />
                  </div>
                 <div className='from' data-aos="zoom-in-up">
                    <label htmlFor="email">EMAIL</label>
                    <input type="text"className="input-field" id="email"/> </div>

                    <div className='from' data-aos="zoom-in-up">
                        <label htmlFor="msg">Massage</label>
                        <textarea className="textarea-field" 
                        id="msg" rows={8}></textarea>
                    </div>
                  <button className='button' data-aos="zoom-in-left">Send</button>
                  
                </div>
             </div>
          </div>   
      
    </div>
  )
}

export default Contact;
