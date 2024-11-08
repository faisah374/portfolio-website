import React from 'react'
import Navbar from './Navbar';
// import Image from 'next/image'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/photo1.jpg)] bg-left lg:bg-[15%] bg-cover'
   style={{backgroundSize:'35%',backgroundPosition:"left 100px"}}    
   >
    {/* //<div className="justify-center items-center ">   <Image src={require('../app/profile photo.jpg' )} alt='photo' width={250} height={30}   */}
        {/* /> </div>// */}
   < Navbar />
   <div className=' container gird lg:grid-cols-2 h-[calc(100vh-60px)]' >
   <div className='hidden lg:block'></div>
   <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
    <div>
      <p data-aos="zoom-in-up">I'm</p>
    <p data-aos ="zoom-in-up">Faisal</p>
    <p  data-aos="zoom-in-left">Hameed</p>
    </div>
 </div>



  </div>   
  </div>
  )
}

export default Hero
