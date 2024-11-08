import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className=' space-y-0'>
                <h2 className='text-5x1' data-aos="zoom-in-up">Get in touch</h2>
                <p  className='text-gray-600 text-18px pt-2' data-aos="zoom-in-up">
                    Drop me line, give me a call, or send me massage by the form.
                </p>
                <div className='flex gap-3 items-center'aos-data="zoom-in-up" ><AiOutlineMail size={30}/> 
              
                faisalh374@gmail.com</div>
            
                
                <div className='flex gap-3 items-center ' aos-data="zoom-in-up" >< BsTelephoneFill size={30} />
                (0305)2062510</div>
            
             </div>

             <div className='space-y-8'>
                <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"className='h-40px bg-transparent border border-accent'id='name' />
                </div>

                 <div className='space-y-8'>
                 <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                    <label htmlFor="email">EMAIL</label>
                    <input type="text"className='h-40px bg-transparent border border-accent'id='email' />
                    </div>

                    <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                        <label htmlFor="msg">Massage</label>
                        <textarea className="bg-transparent border border-accent" 
                        id="msg" rows={8}></textarea>
                    </div>
                  <button className='bg-accent p-2 px-6' data-aos="zoom-in-left">Send</button>
                  
                </div>
             </div>
          </div>   
      
    </div>
  )
}

export default Contact;
