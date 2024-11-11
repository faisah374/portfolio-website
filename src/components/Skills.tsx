import React from 'react';
import "../app/styles/skill.css"

const Skills = () => {
  return (
    <div id="skills" className='skills-container'>
        <div className='skills-grid'>

            <div data-aos="zoom-in-up" className='skills-left'>
                <h2 className='skill-heading'>Teechonlogies I work with</h2>
                <p className='skills-text'>
                    I have solid foundation in web development,specializing in Html,and
                    javascript.My expreince extends to  using farmeworks like React and next.js to 
                    create  dynamic and user friendly application .I am tailwind css for efficient
                    and design.with a passion for  learning ,I stay updated on the latest
                    teclohnologies to enchace my skill set and contributed effectively to projects.
                </p>
            </div>
            <div className='skill-right' >
                <div className='slil-icons-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                    <div>
                        <div className='skill-space'>
                            <h2 data-aos="zoom-in-up">Tailwind</h2>
                            <h2 data-aos="zoom-in-up">css</h2>
                            <h2 data-aos="zoom-in-up">node.js</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Skills;
