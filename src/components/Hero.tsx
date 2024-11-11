import React from 'react'
import Navbar from './Navbar';
import "../app/styles/hero.css"
// import Image from 'next/image'

const Hero = () => {
  return (
    <div id="hero" className='hero-container'
   style={{backgroundSize:'35%',backgroundPosition:"left 100px"}}    
   >
    {/* //<div className="justify-center items-center ">   <Image src={require('../app/profile photo.jpg' )} alt='photo' width={250} height={30}   */}
        {/* /> </div>// */}
   < Navbar />
   <div className='hero-content' >
   <div className='hidden lg:block'></div>
   <div className='hero-text'>
    <div className='hero-msin'>
      <p data-aos="zoom-in-up">I am</p>
    <p data-aos ="zoom-in-up">Faisal</p>
    <p  data-aos="zoom-in-up">Hameed</p>
    </div>
 </div>



  </div>   
  </div>
  )
}

export default Hero
