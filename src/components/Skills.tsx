import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className='container pt-32'>
        <div className='grid md: grid-cols-2 gap-20 items-center'>

            <div data-aos="zoom-in-up">
                <h2 className='text 4x1 md:text-5x1'>Teechonlogies I work with</h2>
                <p className='text-gray-500 pt-2'>
                    I have solid foundation in web development,specializing in Html,and
                    javascript.My expreince extends to  using farmeworks like React and next.js to 
                    create  dynamic and user- friendly application .I 'm tailwind css for efficient
                    and design.with a passion for  learning ,I stay updated on the latest
                    teclohnologies to enchace my skill set and contributed effectively to projects.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-4xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div>
                        <div className='space-y-2'>
                            <h2>Tailwind</h2>
                            <h2>css</h2>
                            <h2>node.js</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Skills;
